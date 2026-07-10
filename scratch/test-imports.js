import * as types from "@modelcontextprotocol/sdk/types.js";
console.log(Object.keys(types).filter(k => k.includes("CreateMessage") || k.includes("Sampling")));
