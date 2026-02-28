# Bottlenecks for Performance Audit

1. **Database & Data Access**
 - N+1 query problems and missing eager loading
 - Lack of database indexes on frequently queried columns
 - Inefficient joins or subqueries
 - Missing pagination on large result sets
 - Absence of query result caching
 - Connection pooling issues

2. **Algorithm Efficiency**
 - Time complexity issues (O(n²) or worse when better exists)
 - Nested loops that could be optmized
 - Redundant calculations or repeated work
 - Inefficient data structure choices
 - Missing memoization or dynamic programming opportunities

3. **Memory Management**
 - Memory leaks or retained references
 - Loading entire datasets when streaming is possible
 - Excessive object instantiation in loops
 - Large data structures kept in memory unnecessarily
 - Missing garbage collection opportunities

4. **Async & Concurrency**
 - Blocking I/O operations that should be Async
 - Sequential operations that could run in parallel
 - Missing Promise.All() or current execution patterns
 - Synchronous file operations
 - Unoptimized worker thread usage

5. **Network & I/O**
 - Excessive API calls (missing request batching)
 - No response caching strategies
 - Large payloads without compression
 - Missing CDN usage for static assertions
 - Lack of connection reuse

6. **Frontend Performance**
 - Render-blocking JavaScript or CSS
 - Missing code splitting or lazy loading
 - Unoptimized images or assets
 - Excessive DOM manipulations or reflows
 - Missing virtualization for long lists
 - No debouncing/throtting on expensive operations

7. **Caching**
 - Missing HTTP caching headers
 - No application-level caching layer
 - Absence of memoization for pure functions
 - Static assets without cache busting

8. **Scalability**
 - Safe-Checks for multi-instance production environment
 - Parallel processing of AMQP/HTTP/gRPC requests across multiple instances against the same codebase and infrastructure components.
 - Compnents connection starvation (Database, Caching, Messaging)
