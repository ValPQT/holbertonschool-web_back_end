📘 ES6 Classes






📑 Table of Contents
📌 Introduction
🧱 Define a Class
⚙️ Add Methods
🧩 Static Methods
🧬 Inheritance
🧠 Metaprogramming & Symbols
🚀 Examples
✅ Conclusion
📌 Introduction

This project introduces ES6 Classes in JavaScript, focusing on object-oriented programming concepts such as:

Class creation
Methods
Static methods
Inheritance
Advanced concepts like metaprogramming and symbols
🧱 Define a Class

A class is defined using the class keyword.

class Person {
  constructor(name) {
    this.name = name;
  }
}
⚙️ Add Methods

Methods are defined inside the class body.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
🧩 Static Methods

Static methods belong to the class, not instances.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

MathUtils.add(2, 3);
🧬 Inheritance

Use extends to inherit from another class.

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

Using super:

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
🧠 Metaprogramming & Symbols
🔹 Metaprogramming

Writing code that manipulates other code.

Object.keys({ a: 1, b: 2 });
🔹 Symbols
const id = Symbol('id');

const user = {
  [id]: 123
};
Unique and immutable
Avoid property name conflicts
🚀 Examples
▶️ Run a simple example
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
▶️ Run with Node.js
node index.js
📦 Installation
npm install
🧪 Testing
npm test
✅ Conclusion

This project demonstrates:

Object-oriented programming with ES6 classes
Code reuse through inheritance
Utility patterns using static methods
Advanced JavaScript concepts like symbols

💡 Tip: Always prefer const over let unless reassignment is required.