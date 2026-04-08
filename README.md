# Python - Type Annotations

## Description

This project introduces type annotations in Python 3 and demonstrates how they improve code readability, maintainability, and static analysis.

---

## Learning Objectives

At the end of this project, I am able to explain:

* What type annotations are in Python 3
* How to use type annotations to specify function signatures and variable types
* What duck typing is
* How to validate Python code with mypy

---

## Type Annotations

Type annotations allow developers to specify the expected types of variables, parameters, and return values.

### Example

```python id="4hxr6j"
name: str = "John"
age: int = 30
height: float = 1.80
```

---

## Function Annotations

Function annotations define the expected argument and return types.

### Example

```python id="a2qfbi"
def add(a: int, b: int) -> int:
    return a + b
```

---

## Advanced Annotations

Python's `typing` module provides support for more complex annotations.

### List

```python id="wxsg1u"
from typing import List

numbers: List[int] = [1, 2, 3]
```

### Dictionary

```python id="c12h7k"
from typing import Dict

user_ages: Dict[str, int] = {"Alice": 25}
```

### Optional

```python id="y35i4n"
from typing import Optional

nickname: Optional[str] = None
```

---

## Duck Typing

Duck typing means that Python focuses on an object's behavior rather than its explicit type.

> "If it walks like a duck and quacks like a duck, it is a duck."

### Example

```python id="lnxazs"
class Dog:
    def speak(self):
        return "Woof"

class Cat:
    def speak(self):
        return "Meow"

def make_sound(animal):
    print(animal.speak())
```

---

## mypy Validation

`mypy` is a static type checker used to validate Python code against type annotations.

### Installation

```bash id="v7gm0q"
pip install mypy
```

### Usage

```bash id="yrtl6x"
mypy file.py
```

---

## Author

* Valentin PASQUIET
