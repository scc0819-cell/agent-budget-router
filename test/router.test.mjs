import test from "node:test";
import assert from "node:assert/strict";
import { routeTask } from "../src/router.mjs";

const config = {
  providers: [
    {id:"local",quality:2,privacy:5,latency:5,marginal_cost:0,fixed_monthly_cost:0},
    {id:"cloud",quality:5,privacy:3,latency:4,marginal_cost:0,fixed_monthly_cost:20}
  ],
  policy: {confidential_min_privacy:4,critical_min_quality:4,prefer_sunk_cost_subscriptions:true}
};

test("confidential tasks stay on privacy-safe providers", () => {
  const r = routeTask({privacy:"confidential",quality:"standard",risk:"medium"}, config);
  assert.equal(r.selected.id, "local");
});

test("critical tasks require higher quality", () => {
  const r = routeTask({privacy:"public",quality:"critical",risk:"high"}, config);
  assert.equal(r.selected.id, "cloud");
});
