# Knowledge: Java & Spring Boot — Performance Best Practices & Guardrails

> Applies to: Java 17/21+
> Scope: Backend APIs, microservices, workers, and data pipelines.
> Deployment: Kubernetes cluster, JVM-based containers.

---

## 1. Concurrency & Threads

### Rules
- **PREFER** Virtual Threads (Java 21+) for I/O-bound tasks to maximize throughput.
- **ALWAYS** use `CompletableFuture` for asynchronous programming in traditional thread models.
- **ALWAYS** use a managed `ExecutorService` — never manually create `new Thread()`.
- **ALWAYS** configure proper thread pool sizes for custom executors to avoid exhaustion.

### Hard Guardrails — NEVER do this
| Forbidden | Reason |
|---|---|
| `Thread.sleep()` in request threads | Blocks request processing; use scheduled tasks or non-blocking delays |
| `parallelStream()` for I/O tasks | Uses a shared common ForkJoinPool; can block the entire JVM |
| Manually creating `new Thread()` | High overhead; lacks management and observability |
| Swallowing `InterruptedException` | Prevents proper thread shutdown and task cancellation |
| Infinite `while(true)` without exit/sleep | Maxes out CPU; must have termination logic |

### Correct Patterns
```java
// CORRECT — Using Virtual Threads (Java 21)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> doWork());
}

// CORRECT — CompletableFuture with custom executor
CompletableFuture.supplyAsync(() -> getData(), customExecutor)
    .thenAccept(data -> process(data));
```

---

## 2. Memory & Garbage Collection

### Rules
- **ALWAYS** set appropriate Heap limits (`-Xmx`, `-Xms`) in container environments.
- **ALWAYS** use `StringBuilder` for string concatenation in loops.
- **ALWAYS** close resources (Streams, Connections) using `try-with-resources`.
- **PREFER** primitive types (`int`, `long`) over wrapper types (`Integer`, `Long`) in high-performance loops to avoid boxing.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| Large static collections without eviction | Memory leak risk; use `WeakHashMap` or cache with TTL |
| Loading large result sets into memory | GC pressure/OOM; use pagination or streaming |
| `System.gc()` calls | Disrupts JVM's optimized GC management |
| Creating large objects in loops | Increases GC overhead; reuse objects where possible |

---

## 3. Database & JPA/Hibernate

### Rules
- **ALWAYS** use `@Query` with projection for read-heavy operations — avoid loading full entities.
- **ALWAYS** use `spring.jpa.open-in-view=false` to avoid the "Open Session in View" anti-pattern.
- **ALWAYS** use `BatchSize` or `@Fetch(FetchMode.SUBSELECT)` to mitigate N+1 problems.
- **ALWAYS** paginate results using `Pageable` or `Slice`.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| `findAll()` on large tables | OOM and performance collapse |
| N+1 Queries in loops | Performance bottleneck; use `JOIN FETCH` or batching |
| Mapping every field as Eager | Over-fetches data; use `Lazy` loading by default |
| Raw SQL without parameterization | SQL injection risk |

---

## 4. Spring Boot Specifics

### Rules
- **ALWAYS** use Constructor Injection over `@Autowired` on fields (testability, immutability).
- **ALWAYS** define explicit timeouts for RestTemplate / WebClient.
- **ALWAYS** use `@Validated` for incoming request DTOs.
- **ALWAYS** use profiles (`application-dev.yml`, `application-prod.yml`) for environment management.
