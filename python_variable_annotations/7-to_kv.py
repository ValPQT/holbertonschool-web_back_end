#!/usr/bin/env python3
"""Module that provides a function to convert a key and value into a tuple."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the string and the square of
    the value as a float."""
    return (k, float(v ** 2))
