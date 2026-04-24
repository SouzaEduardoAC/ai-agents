import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs-extra";
import path from "path";
import { glob } from "glob";
import toml from "toml";

const AGENTS_ROOT = process.cwd();

const server = new Server(
  {
    name: "agent-hub",
    version: "1.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * Resolves probes like !{cat path} and !{gemini mcp list} inside a string.
 */
async function resolveProbes(content) {
  // 1. Resolve !{cat ...}
  const catRegex = /!\{cat\s+([^\}]+)\}/g;
  let resolvedContent = content;
  let match;
  
  while ((match = catRegex.exec(content)) !== null) {
    const rawPath = match[1].trim();
    // Resolve relative or home-dir paths to the Hub's root
    const absolutePath = rawPath.startsWith("~/.gemini/agents") 
      ? path.join(AGENTS_ROOT, rawPath.replace("~/.gemini/agents/", ""))
      : path.resolve(AGENTS_ROOT, rawPath);

    try {
      const fileData = await fs.readFile(absolutePath, "utf-8");
      resolvedContent = resolvedContent.replace(match[0], fileData);
    } catch (e) {
      resolvedContent = resolvedContent.replace(match[0], `[Error reading file: ${rawPath}]`);
    }
  }

  // 2. Resolve !{gemini mcp list} 
  // For Claude/AntiGravity, we tell them to check their own toolset.
  resolvedContent = resolvedContent.replace(/!\{gemini mcp list\}/g, "[Context: Check your connected MCP tools for specialized capabilities.]");

  return resolvedContent;
}

async function readMarkdownDir(dirPath) {
  if (!(await fs.pathExists(dirPath))) return "";
  const files = await glob(path.join(dirPath, "*.md"));
  let content = "";
  for (const file of files) {
    const fileContent = await fs.readFile(file, "utf-8");
    const fileName = path.basename(file);
    content += `\n### File: ${fileName}\n${fileContent}\n`;
  }
  return content;
}

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_agents",
        description: "List all available specialized agents.",
        inputSchema: { type: "object", properties: {} },
      },
      {
        name: "call_agent_command",
        description: "Run a specific command (e.g., 'create', 'auditor') from an agent's library.",
        inputSchema: {
          type: "object",
          properties: {
            agent: { type: "string", description: "The agent name (e.g., architect, backend)." },
            command: { type: "string", description: "The command name (e.g., create, docs, discovery)." },
            args: { type: "string", description: "The goal or arguments for the task." },
          },
          required: ["agent", "command", "args"],
        },
      },
      {
        name: "get_agent_prompt",
        description: "Get the full persona and knowledge for a specific agent.",
        inputSchema: {
          type: "object",
          properties: {
            agent: { type: "string" },
          },
          required: ["agent"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "list_agents") {
      const dirs = await fs.readdir(AGENTS_ROOT, { withFileTypes: true });
      const agents = dirs
        .filter((d) => d.isDirectory() && !d.name.startsWith(".") && !["node_modules", "bin", "docs"].includes(d.name))
        .map((d) => d.name);
      return { content: [{ type: "text", text: agents.join(", ") }] };
    }

    if (name === "call_agent_command") {
      const { agent, command, args: taskArgs } = args;
      const tomlPath = path.join(AGENTS_ROOT, agent, "commands", agent, `${command}.toml`);

      if (!(await fs.pathExists(tomlPath))) {
        throw new Error(`Command '${command}' for agent '${agent}' not found at ${tomlPath}`);
      }

      const tomlData = toml.parse(await fs.readFile(tomlPath, "utf-8"));
      let prompt = tomlData.prompt || "";
      
      // Resolve {{args}}
      prompt = prompt.replace(/\{\{args\}\}/g, taskArgs);
      
      // Resolve internal !{cat ...} probes for universal use
      const finalPrompt = await resolveProbes(prompt);

      return { content: [{ type: "text", text: finalPrompt }] };
    }

    if (name === "get_agent_prompt") {
      const agent = args.agent;
      const agentPath = path.join(AGENTS_ROOT, agent);
      const persona = await fs.readFile(path.join(agentPath, "brain", "persona.md"), "utf-8").catch(() => "");
      const skills = await readMarkdownDir(path.join(agentPath, "skills")).catch(() => "");
      const knowledge = await readMarkdownDir(path.join(agentPath, "knowledge")).catch(() => "");

      const fullPrompt = `
# Persona: ${agent}
${persona}

# Skills
${skills}

# Knowledge Base
${knowledge}
      `;
      return { content: [{ type: "text", text: fullPrompt.trim() }] };
    }

    throw new Error(`Tool not found: ${name}`);
  } catch (error) {
    return { isError: true, content: [{ type: "text", text: error.message }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Agent Hub MCP Server (v1.1.0) running on stdio");
