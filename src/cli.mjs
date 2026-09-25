#!/usr/bin/env node
import fs from "node:fs";
import { routeTask } from "./router.mjs";

function arg(name, fallback) {
  const i = process.argv.indexOf("--" + name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const configPath = arg("config", new URL("../config.example.json", import.meta.url));
const raw = configPath instanceof URL ? fs.readFileSync(configPath, "utf8") : fs.readFileSync(configPath, "utf8");
const config = JSON.parse(raw);

const task = {
  text: arg("task", "general task"),
  privacy: arg("privacy", "public"),
  quality: arg("quality", "standard"),
  risk: arg("risk", "medium")
};

const result = routeTask(task, config);
console.log(JSON.stringify({
  task: result.task,
  selected: result.selected.id,
  label: result.selected.label,
  score: result.selected.score,
  alternatives: result.alternatives.map(x => ({id:x.id, score:x.score}))
}, null, 2));
