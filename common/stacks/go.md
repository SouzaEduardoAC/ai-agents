# Knowledge: Go (Golang) — Performance Best Practices & Guardrails

> Applies to: Go 1.21+
> Scope: High-performance microservices, CLI tools, and infrastructure logic.
> Deployment: Compiled binaries, minimal scratch/distroless containers.

---

## 1. Concurrency & Goroutines

### Rules
- **ALWAYS** use channels or `sync` primitives for communication between goroutines.
- **ALWAYS** pass `context.Context` to all I/O-bound functions and respect `ctx.Done()`.
- **ALWAYS** wait for goroutines to finish using `sync.WaitGroup` or errgroups.
- **ALWAYS** check for race conditions using `go test -race`.

### Hard Guardrails — NEVER do this
| Forbidden | Reason |
|---|---|
| Goroutine leaks | Starting a goroutine without a clear termination path |
| Writing to a closed channel | Causes a panic |
| Reading from an uninitialized channel | Blocks forever |
| Passing large structs by value to goroutines | Unnecessary memory copying |
| Using `time.Sleep` for synchronization | Unreliable; use channels or WaitGroups |

### Correct Patterns
```go
// CORRECT — Using context for cancellation
func fetchData(ctx context.Context) error {
    req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)
    // ...
}

// CORRECT — sync.WaitGroup for coordination
var wg sync.WaitGroup
wg.Add(1)
go func() {
    defer wg.Done()
    doWork()
}()
wg.Wait()
```

---

## 2. Memory & Performance

### Rules
- **ALWAYS** check if an object escapes to the heap using `go build -gcflags="-m"`.
- **ALWAYS** use `sync.Pool` for frequently allocated and discarded objects.
- **ALWAYS** pre-allocate slices and maps if the size is known: `make([]T, 0, capacity)`.
- **PREFER** `bufio` for frequent small reads/writes.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| `append()` in a loop without pre-allocation | Repeated re-allocations and copying |
| Returning pointers to small local variables | May cause unnecessary heap escape |
| Using `interface{}` in hot paths | Causes boxing and reflection overhead |
| Repeatedly converting `[]byte` to `string` | Allocates new memory; use `unsafe` only if critical |

---

## 3. Error Handling

### Rules
- **ALWAYS** check errors immediately: `if err != nil { return err }`.
- **ALWAYS** wrap errors with context: `fmt.Errorf("failed to...: %w", err)`.
- **NEVER** use `panic` for normal error flow — only for unrecoverable system states.
- **ALWAYS** use `errors.Is` and `errors.As` for error inspection.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| Swallowing errors | Makes debugging impossible and leads to inconsistent states |
| Using `panic` instead of returning `error` | Crashes the process; not idiomatic |
| Comparing error strings | Fragile; use `errors.Is` |

---

## 4. Structs & Interfaces

### Rules
- **ALWAYS** keep interfaces small (usually 1–3 methods).
- **ALWAYS** accept interfaces and return concrete types.
- **ALWAYS** use pointer receivers for methods that modify the struct or if the struct is large.
