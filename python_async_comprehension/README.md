# Async Generators & Comprehensions

## Learning Objectives

### How to write an asynchronous generator

An **asynchronous generator** is a coroutine that uses `yield` to produce values one at a time, while allowing other tasks to run between each yield thanks to `await`.

It is defined with `async def` and contains at least one `yield`.

```python
import asyncio
import random

async def async_generator():
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
```

To consume an async generator, use `async for`:

```python
async def main():
    async for value in async_generator():
        print(value)

asyncio.run(main())
```

The key difference from a regular generator is the `async for` — you cannot use a plain `for` loop to iterate over an async generator.

---

### How to use async comprehensions

**Async comprehensions** work like regular list/set/dict comprehensions, but they can `await` expressions or iterate over async generators using `async for`.

They must be used inside an `async def` function.

```python
import asyncio

async def main():
    # Async list comprehension over an async generator
    results = [value async for value in async_generator()]
    print(results)

asyncio.run(main())
```

You can also use `await` inside a comprehension to call coroutines:

```python
async def fetch(n):
    await asyncio.sleep(0.1)
    return n * 2

async def main():
    results = [await fetch(i) for i in range(5)]
    print(results)  # [0, 2, 4, 6, 8]
```

Both forms are valid — `async for` for async iterators/generators, and `await` for individual coroutines.

---

### How to type-annotate generators

#### Regular generator

A regular generator that yields `float` values is annotated with `Generator` from the `typing` module:

```python
from typing import Generator

def simple_generator() -> Generator[float, None, None]:
    yield 1.0
```

The three type parameters are: `Generator[YieldType, SendType, ReturnType]`. Use `None` for send and return if unused.

#### Asynchronous generator

An async generator is annotated with `AsyncGenerator` from the `typing` module:

```python
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    yield 1.0
```

The two type parameters are: `AsyncGenerator[YieldType, SendType]`.

#### Complete example

```python
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

async def main() -> None:
    results: list[float] = [value async for value in async_generator()]
    print(results)

asyncio.run(main())
```

---

## Requirements

- Ubuntu 20.04 LTS, Python 3.9
- `pycodestyle` style (version 2.5)
- All files must be executable and end with a new line
- First line of every file: `#!/usr/bin/env python3`
- All modules, classes, and functions must have a complete docstring