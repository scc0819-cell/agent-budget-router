# Agent Budget Router

[![CI](https://github.com/scc0819-cell/agent-budget-router/actions/workflows/ci.yml/badge.svg)](https://github.com/scc0819-cell/agent-budget-router/actions/workflows/ci.yml)

**Route AI work to the right model before you burn more money.**

> **Looking for the broader product?** Agent Budget Router is the free/open-source entry point to **YJS AI Labs — AI Stack Control Plane**, a planned layer for cross-AI handoff, quota-aware routing, shared context and subscription ROI.
>
> - **Store:** https://scc0819-cell.github.io/yjs-ai-labs/?utm_source=github&utm_medium=repo&utm_campaign=abr-launch
> - **Interactive demo:** https://scc0819-cell.github.io/yjs-ai-labs/demo.html?utm_source=github&utm_medium=repo&utm_campaign=abr-launch
> - **Pro beta:** https://scc0819-cell.github.io/yjs-ai-labs/checkout.html?offer=pro&utm_source=github&utm_medium=repo&utm_campaign=abr-launch
> - **Setup / optimization:** https://scc0819-cell.github.io/yjs-ai-labs/checkout.html?offer=setup&utm_source=github&utm_medium=repo&utm_campaign=abr-launch

Agent Budget Router (ABR) is a local-first, deterministic routing layer for people and teams using multiple AI subscriptions, APIs, and local models.

ABR filters providers using task privacy, required quality and risk, then ranks eligible providers using their quality, privacy, latency score and marginal cost.

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
- Fixed scoring bonus for zero-marginal-cost subscriptions; no remaining-quota tracking
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

## Where this is going

The open-source router stays useful on its own. The broader product thesis is **AI Stack Control Plane**:

- coordinate GPT / Codex, Claude, Gemini and local models;
- preserve context across handoffs;
- load only the MCP tools and skills a task needs;
- use quota and paid subscription capacity deliberately;
- measure whether the AI stack is actually paying back.

These capabilities are in validation, not presented as finished paid software. If this is the problem you have, join the structured beta test:

**Pro beta:** https://scc0819-cell.github.io/yjs-ai-labs/checkout.html?offer=pro&utm_source=github&utm_medium=repo&utm_campaign=abr-launch

### Use-case research

- Multi-AI subscription ROI: https://scc0819-cell.github.io/yjs-ai-labs/use-cases/multi-ai-subscription-roi.html?utm_source=github&utm_medium=repo&utm_campaign=use-cases
- Claude + Codex + Gemini handoff: https://scc0819-cell.github.io/yjs-ai-labs/use-cases/claude-codex-gemini-handoff.html?utm_source=github&utm_medium=repo&utm_campaign=use-cases
- MCP context bloat: https://scc0819-cell.github.io/yjs-ai-labs/use-cases/mcp-context-bloat.html?utm_source=github&utm_medium=repo&utm_campaign=use-cases
- Local + cloud routing: https://scc0819-cell.github.io/yjs-ai-labs/use-cases/local-cloud-ai-routing.html?utm_source=github&utm_medium=repo&utm_campaign=use-cases

## Contributing

Issues and pull requests are welcome. See `CONTRIBUTING.md`.

## License

MIT
