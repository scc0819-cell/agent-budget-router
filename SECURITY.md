# Security Policy

Do not open public issues containing credentials, private prompts, customer data, access tokens, or confidential configuration.

The MVP performs routing only and does not transmit prompts to providers.

Before enabling future execution adapters:
- use least-privilege credentials;
- keep secrets outside the repository;
- require explicit opt-in for external execution;
- log routing decisions without logging sensitive prompt bodies.
