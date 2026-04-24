# Backend Testing Tools & Patterns

## 1. Unit Testing
- **Preferred Tools:** Jest, Vitest, or Mocha/Chai.
- **Mocking:** Use `jest.mock()` or `sinon` to isolate domain logic from the Database, Network, or Filesystem.
- **Pattern:** Focus on Service/Domain layers. Each public method should have at least one happy-path and two edge-case tests.

## 2. Integration Testing
- **API Tests:** Use `supertest` or `axios` to verify endpoint status codes, headers, and response schemas.
- **Database Tests:** Use a clean test database (or containers via Testcontainers) for repository layer validation.
- **Contract Tests:** Ensure API responses match the OpenAPI/Swagger specification.

## 3. Resilience Testing
- **Middleware:** Verify that Auth, Rate-limiting, and Logging middleware are applied correctly to routes.
- **Error Handling:** Explicitly test 4xx and 5xx response paths.
