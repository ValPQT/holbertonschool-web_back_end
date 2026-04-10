#!/usr/bin/env python3
"""Module that defines an asynchronous comprehension coroutine."""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random floating-point numbers from async_generator."""
    return [i async for i in async_generator()]
