import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs-extra";
import path from "path";
import { glob } from "glob";

const AGENTS_ROOT = process.cwd();

const server = new Server(
  {
    name: "agent-hub",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * Helper to read all markdown files in a directory and concatenate them with headers.
 */
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
        name: "get_agent_prompt",
        description: "Get the full prompt (persona, skills, knowledge) for a specific agent.",
        inputSchema: {
          type: "object",
          properties: {
            agent: { type: "string", description: "Name of the agent (e.g., architect, brainstormer)." },
          },
          required: ["agent"],
        },
      },
      {
        name: "get_template",
        description: "Get a specific template from an agent's templates directory.",
        inputSchema: {
          type: "object",
          properties: {
            agent: { type: "string" },
            templateName: { type: "string" },
          },
          required: ["agent", "templateName"],
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
        .filter((d) => d.isDirectory() && !d.name.startsWith(".") && d.name !== "node_modules")
        .map((d) => d.name);
      return { content: [{ type: "text", text: agents.join(", ") }] };
    }

    if (name === "get_agent_prompt") {
      const agent = args.agent;
      const agentPath = path.join(AGENTS_ROOT, agent);

      if (!(await fs.pathExists(agentPath))) {
        throw new Error(`Agent '${agent}' not found at ${agentPath}`);
      }

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

    if (name === "get_template") {
      const { agent, templateName } = args;
      const templatePath = path.join(AGENTS_ROOT, agent, "templates", templateName);
      
      if (!(await fs.pathExists(templatePath))) {
        throw new Error(`Template '${templateName}' not found for agent '${agent}'`);
      }

      const content = await fs.readFile(templatePath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    throw new Error(`Tool not found: ${name}`);
  } catch (error) {
    return {
      isError: true,
      content: [{ type: "text", text: error.message }],
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Agent Hub MCP Server running on stdio");
