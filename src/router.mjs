const LEVEL = { low:1, medium:2, high:3, public:1, internal:2, confidential:3, draft:1, standard:2, critical:3 };

export function routeTask(task, config) {
  const policy = config.policy || {};
  const privacy = LEVEL[task.privacy || "public"] || 1;
  const quality = LEVEL[task.quality || "standard"] || 2;
  const risk = LEVEL[task.risk || "medium"] || 2;

  let candidates = [...config.providers];
  if (privacy >= 3 && policy.confidential_min_privacy) {
    candidates = candidates.filter(p => p.privacy >= policy.confidential_min_privacy);
  }
  if ((quality >= 3 || risk >= 3) && policy.critical_min_quality) {
    candidates = candidates.filter(p => p.quality >= policy.critical_min_quality);
  }
  if (!candidates.length) throw new Error("No provider satisfies the routing policy.");

  const scored = candidates.map(p => {
    let score = p.quality * 4 + p.privacy * privacy + p.latency;
    if (policy.prefer_sunk_cost_subscriptions && p.fixed_monthly_cost > 0 && p.marginal_cost === 0) score += 3;
    score -= (p.marginal_cost || 0) * 10;
    return {...p, score};
  }).sort((a,b) => b.score - a.score);

  return { selected: scored[0], alternatives: scored.slice(1), task };
}
