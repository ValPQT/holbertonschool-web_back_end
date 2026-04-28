# 📘 ES6 Classes

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📑 Table of Contents

- [📌 Introduction](#-introduction)
- [🧱 Define a Class](#-define-a-class)
- [⚙️ Add Methods](#️-add-methods)
- [🧩 Static Methods](#-static-methods)
- [🧬 Inheritance](#-inheritance)
- [🧠 Metaprogramming & Symbols](#-metaprogramming--symbols)
- [🚀 Examples](#-examples)
- [📦 Installation](#-installation)
- [🧪 Testing](#-testing)
- [✅ Conclusion](#-conclusion)

---

## 📌 Introduction

This project introduces **ES6 Classes in JavaScript**, focusing on:

- Class creation
- Methods
- Static methods
- Inheritance
- Metaprogramming and symbols

---

## 🧱 Define a Class

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

 ## ⚙️ Add Methods
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

 ## 🧩 Static Methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

MathUtils.add(2, 3);

 ## 🧬 Inheritance
class Animal {
  speak() {
    return 'Some sound';
  }
}

class Dog extends Animal {
  speak() {
    return 'Bark';
  }
}
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
 
 ## 🧠 Metaprogramming & Symbols
# Metaprogramming
Object.keys({ a: 1, b: 2 });

# Symbols
const id = Symbol('id');

const user = {
  [id]: 123
};

- Unique and immutable
- Avoid name collisions
- Not enumerable in for...in

 ## 🚀 Examples
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const user = new Person('Alice');
console.log(user.greet());

 ## Run with Node.js
node index.js

 ## 📦 Installation
npm install

 ## 🧪 Testing
npm test