import { Runner } from "./runner";

console.log("[chrome-meet-webhook-extension] starting");

const runner = new Runner({
  delay: 1000,
});

runner.start().catch((reason) => console.error("[chrome-meet-webhook-extension]", reason));
