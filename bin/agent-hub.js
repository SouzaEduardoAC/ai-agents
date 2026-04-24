#!/usr/bin/env node
import { Command } from "commander";
import path from "path";
import fs from "fs-extra";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const program = new Command();

program
  .name("agent-hub")
  .description("Universal bridge for AI Agents")
  .version("1.1.0");

program
  .command("serve")
  .description("Start the MCP server")
  .action(() => {
    const serverPath = path.join(ROOT, "index.js");
    const child = spawn("node", [serverPath], {
      stdio: "inherit",
    });
    child.on("exit", (code) => process.exit(code));
  });

program
  .command("link")
  .description("Link an agent persona to a local file (e.g., .cursorrules)")
  .argument("<agent>", "Name of the agent")
  .argument("<target>", "Target file path")
  .action(async (agent, target) => {
    const personaPath = path.join(ROOT, agent, "brain", "persona.md");
    if (!(await fs.pathExists(personaPath))) {
      console.error(`Error: Agent '${agent}' not found.`);
      process.exit(1);
    }
    const absoluteTarget = path.resolve(process.cwd(), target);
    await fs.ensureDir(path.dirname(absoluteTarget));
    try {
      if (await fs.pathExists(absoluteTarget)) await fs.remove(absoluteTarget);
      await fs.symlink(personaPath, absoluteTarget);
      console.log(`Success: Linked ${agent} persona to ${target}`);
    } catch (err) {
      console.error(`Error creating symlink: ${err.message}`);
      process.exit(1);
    }
  });

program
  .command("bootstrap")
  .description("Install all agent personas and slash commands into local LLM environments")
  .action(async () => {
    const GEMINI_COMMANDS_ROOT = path.join(process.env.HOME, ".gemini", "commands");
    const ANTIGRAVITY_BRAIN_ROOT = path.join(process.env.HOME, ".gemini", "antigravity", "brain");

    await fs.ensureDir(GEMINI_COMMANDS_ROOT);
    await fs.ensureDir(ANTIGRAVITY_BRAIN_ROOT);

    const agents = (await fs.readdir(ROOT, { withFileTypes: true }))
      .filter((d) => d.isDirectory() && !d.name.startsWith(".") && !["node_modules", "bin", "docs"].includes(d.name))
      .map((d) => d.name);

    console.log("\n🚀 Bootstrapping Universal Agent Hub...");

    for (const agent of agents) {
      console.log(`\n📦 Processing Agent: [${agent.toUpperCase()}]`);

      // 1. Install Gemini Slash Commands
      const cmdSource = path.join(ROOT, agent, "commands", agent);
      if (await fs.pathExists(cmdSource)) {
        const cmdTarget = path.join(GEMINI_COMMANDS_ROOT, agent);
        await fs.ensureDir(cmdTarget);
        const tomlFiles = await fs.readdir(cmdSource);
        for (const file of tomlFiles) {
          if (file.endsWith(".toml")) {
            const content = await fs.readFile(path.join(cmdSource, file), "utf-8");
            const updatedContent = content.replace(/~\/\.gemini\/agents/g, ROOT).replace(/\.\.\/\.\.\/\.\./g, ROOT);
            await fs.writeFile(path.join(cmdTarget, file), updatedContent);
            console.log(`   ✅ [Gemini] Installed /${agent}:${path.basename(file, ".toml")}`);
          }
        }
      }

      // 2. Install AntiGravity Personas
      const personaSource = path.join(ROOT, agent, "brain", "persona.md");
      if (await fs.pathExists(personaSource)) {
        const personaTarget = path.join(ANTIGRAVITY_BRAIN_ROOT, `${agent}.md`);
        await fs.copy(personaSource, personaTarget);
        console.log(`   ✅ [AntiGravity] Installed persona: ${agent}.md`);
      }
    }

    console.log("\n✨ Bootstrap Complete!");
    console.log("--------------------------------------------------");
    console.log("1. Gemini CLI: Restart terminal to use slash commands.");
    console.log("2. AntiGravity: Personas are now in your Manager View.");
    console.log("3. Claude Code: Use 'call_agent_command' via the MCP server.");
    console.log("--------------------------------------------------");
  });

program.parse();
