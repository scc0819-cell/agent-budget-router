# Agent Budget Router

[![CI](https://github.com/scc0819-cell/agent-budget-router/actions/workflows/ci.yml/badge.svg)](https://github.com/scc0819-cell/agent-budget-router/actions/workflows/ci.yml)

**Route AI work to the right model before you burn more money.**

Agent Budget Router (ABR) is a local-first, deterministic routing layer for people and teams using multiple AI subscriptions, APIs, and local models.

Instead of sending every task to the most expensive model, ABR scores the task against privacy, quality, risk, latency, and marginal cost.

## Why

Modern AI builders often pay for several tools at once:
- ChatGPT / Codex
- Claude / Claude Code
- Gemini
- Local models
- Metered APIs

ABR helps turn that stack into a deliberate portfolio instead of a pile of subscriptions.

## MVP features
- Rule-based provider routing
- Privacy-aware routing gates
- Quality and risk thresholds
- Preference for already-paid subscription capacity
- Zero external runtime dependencies
- GitHub Actions CI

## Quick start

```bash
git clone https://github.com/scc0819-cell/agent-budget-router.git
cd agent-budget-router
npm test
npm run demo
```

Try your own task:

```bash
node src/cli.mjs \
  --task "Review a production deployment plan" \
  --privacy internal \
  --quality critical \
  --risk high
```

Copy `config.example.json` to `config.local.json` and tune the provider capabilities and policy to match your own AI stack.

## Safety

ABR does **not** send prompts to any AI provider in the MVP. It only decides where a task should go. Provider execution adapters will be opt-in so that credentials and private data remain under user control.

## Roadmap
1. Usage ledger and break-even dashboard
2. Local model / CLI adapters
3. Budget caps and escalation rules
4. Team policies and audit log
5. Web dashboard

## Commercial direction

The open-source core will remain useful on its own. A separate Pro pack is planned for advanced policies, dashboards, team presets, deployment recipes, and commercial support.

## Contributing

Issues and pull requests are welcome. See `CONTRIBUTING.md`.

## License

MIT
