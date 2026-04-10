# Async Python — asyncio

## Learning Objectives

### `async` and `await` syntax

In Python, `async` and `await` are keywords used to define and call **coroutines** — functions that can be paused and resumed without blocking the entire program.

- `async def` declares a coroutine function.
- `await` pauses the coroutine until the awaited result is ready, yielding control back to the event loop in the meantime.

```python
async def say_hello():
    await asyncio.sleep(1)
    print("Hello!")
```

A coroutine does **not** run by itself — it must be scheduled by an event loop.

---

### How to execute an async program with `asyncio`

`asyncio` is the standard Python library for writing asynchronous code. The entry point to run a coroutine is `asyncio.run()`, which creates an event loop, runs the coroutine, and closes the loop when done.

```python
import asyncio

async def main():
    print("Start")
    await asyncio.sleep(1)
    print("End")

asyncio.run(main())
```

---

### How to run concurrent coroutines

To run multiple coroutines **concurrently** (at the same time), use `asyncio.gather()`. It schedules all coroutines and waits for all of them to complete.

```python
import asyncio

async def task(name, delay):
    await asyncio.sleep(delay)
    print(f"{name} done")

async def main():
    await asyncio.gather(
        task("A", 2),
        task("B", 1),
        task("C", 3),
    )

asyncio.run(main())
# Output order: B done, A done, C done
```

All three coroutines run concurrently — the total time is ~3 seconds, not 6.

---

### How to create `asyncio` tasks

An `asyncio` **task** wraps a coroutine and schedules it to run on the event loop immediately, without needing to `await` it right away. Tasks are created with `asyncio.create_task()`.

```python
import asyncio

async def work():
    await asyncio.sleep(1)
    return 42

async def main():
    task = asyncio.create_task(work())
    # Do other things here while work() runs in the background
    result = await task
    print(result)  # 42

asyncio.run(main())
```

The key difference from `gather`: tasks start immediately when created, while `gather` starts them all at once when awaited.

---

### How to use the `random` module

The `random` module generates pseudo-random numbers. It is commonly used in async projects to simulate variable delays.

```python
import random

# Random float between 0 and 1
random.random()

# Random float between a and b
random.uniform(1, 10)

# Random integer between a and b (inclusive)
random.randint(1, 100)

# Random choice from a list
random.choice(["a", "b", "c"])
```

Example with asyncio:

```python
import asyncio
import random

async def random_delay():
    delay = random.uniform(0, 10)
    await asyncio.sleep(delay)
    return delay
```

---

## Requirements

- Ubuntu 20.04 LTS, Python 3.9
- `pycodestyle` style (version 2.5)
- All files must be executable and end with a new line
- First line of every file: `#!/usr/bin/env python3`
- All modules, classes, and functions must have a complete docstring