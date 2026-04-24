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
  .version("1.0.0");

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
    
    // We'll create a symlink
    try {
      if (await fs.pathExists(absoluteTarget)) {
        await fs.remove(absoluteTarget);
      }
      await fs.symlink(personaPath, absoluteTarget);
      console.log(`Success: Linked ${agent} persona to ${target}`);
    } catch (err) {
      console.error(`Error creating symlink: ${err.message}`);
      process.exit(1);
    }
  });

program
  .command("list")
  .description("List available agents")
  .action(async () => {
    const dirs = await fs.readdir(ROOT, { withFileTypes: true });
    const agents = dirs
      .filter((d) => d.isDirectory() && !d.name.startsWith(".") && d.name !== "node_modules" && d.name !== "bin")
      .map((d) => d.name);
    console.log("Available Agents:");
    agents.forEach(a => console.log(` - ${a}`));
  });

program.parse();
