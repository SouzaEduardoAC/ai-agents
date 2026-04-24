# Skill: Backend Technical Reviewer (Extension)

This skill extends the `base_reviewer.md`.

## 1. Backend-Specific Audit
- **Database Optimization:** Check for N+1 queries, missing indexes (Postgres/SQL Server/MongoDB), and proper transaction boundaries.
- **Resilience:** Verify Retry policies, Circuit Breakers, and Timeout configurations for external service calls.
- **Scalability:** Ensure statelessness where possible and correct use of Redis/Valkey for session or cache.

## 2. API Integrity
- **Rate Limiting:** Verify protection against DDoS/Brute force.
- **Middleware:** Ensure auth and logging middleware are applied correctly.
- **Contract Sync:** Ensure changes to logic reflect in OpenAPI/Swagger specs if used.
