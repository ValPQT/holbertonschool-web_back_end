# ES6 Data Structures — Learning Objectives

## 1. How to use `map`, `filter`, and `reduce` on arrays

These three methods are **higher-order functions** — they take a callback as argument and return a new result without mutating the original array.

---

### `map`

Transforms each element of an array and returns a **new array of the same length**.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

const users = [{ name: 'Alice' }, { name: 'Bob' }];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']
```

> Use `map` when you want to **transform** every element.

---

### `filter`

Returns a **new array** containing only the elements for which the callback returns `true`.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol', active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ name: 'Alice', ... }, { name: 'Carol', ... }]
```

> Use `filter` when you want to **select** a subset of elements.

---

### `reduce`

Accumulates all elements into a **single value** (number, string, object, array…).

```javascript
// Signature: array.reduce((accumulator, currentValue) => ..., initialValue)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// Build an object from an array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }
```

> Use `reduce` when you want to **compute a single result** from all elements.

---

### Chaining

These methods can be chained together:

```javascript
const orders = [
  { product: 'Book', price: 12, qty: 2 },
  { product: 'Pen', price: 1, qty: 10 },
  { product: 'Laptop', price: 999, qty: 1 }
];

const totalExpensive = orders
  .filter(order => order.price > 10)            // keep expensive items
  .map(order => order.price * order.qty)         // compute subtotals
  .reduce((acc, subtotal) => acc + subtotal, 0); // sum them up

console.log(totalExpensive); // 1023
```

---

## 2. Typed Arrays

A **Typed Array** is an array-like object that stores raw binary data with a **fixed numeric type**. Unlike regular arrays, all elements have the same type and the same byte size.

### Why use them?

- Performance-critical operations (audio, video, WebGL, networking)
- Working with binary data (files, buffers, sockets)
- Interfacing with WebAssembly or C-style APIs

### The two building blocks

| Concept | Role |
|---|---|
| `ArrayBuffer` | Raw block of memory (just bytes, no type) |
| Typed Array View | Typed window onto an `ArrayBuffer` |

```javascript
// Allocate 16 bytes of raw memory
const buffer = new ArrayBuffer(16);

// View it as 32-bit integers (4 bytes each → 4 slots)
const int32 = new Int32Array(buffer);
int32[0] = 42;
int32[1] = 100;
console.log(int32); // Int32Array [42, 100, 0, 0]
```

### Available Typed Array types

| Type | Bytes | Description |
|---|---|---|
| `Int8Array` | 1 | Signed 8-bit integer |
| `Uint8Array` | 1 | Unsigned 8-bit integer |
| `Uint8ClampedArray` | 1 | Unsigned 8-bit, clamped to 0–255 |
| `Int16Array` | 2 | Signed 16-bit integer |
| `Uint16Array` | 2 | Unsigned 16-bit integer |
| `Int32Array` | 4 | Signed 32-bit integer |
| `Uint32Array` | 4 | Unsigned 32-bit integer |
| `Float32Array` | 4 | 32-bit floating point |
| `Float64Array` | 8 | 64-bit floating point |

```javascript
const floats = new Float64Array([1.1, 2.2, 3.3]);
console.log(floats[0]); // 1.1

// Typed arrays support map, filter, reduce too
const doubled = floats.map(x => x * 2);
console.log(doubled); // Float64Array [2.2, 4.4, 6.6]
```

> Values that don't fit the type are **silently truncated** (e.g., storing 300 in a `Uint8Array` gives 44).

---

## 3. The `Set`, `Map`, and Weak link data structures

### `Set`

A `Set` is a collection of **unique values** (no duplicates allowed). Values can be of any type.

```javascript
const set = new Set([1, 2, 3, 2, 1]);
console.log(set); // Set { 1, 2, 3 }

set.add(4);
set.delete(2);
console.log(set.has(3)); // true
console.log(set.size);   // 3

// Iterate
for (const val of set) {
  console.log(val);
}

// Convert to array
const arr = [...set]; // [1, 3, 4]
```

**Common use case:** remove duplicates from an array.

```javascript
const unique = [...new Set([1, 1, 2, 3, 3, 4])];
console.log(unique); // [1, 2, 3, 4]
```

---

### `Map`

A `Map` is a collection of **key-value pairs** where **keys can be of any type** (unlike plain objects where keys are always strings or symbols).

```javascript
const map = new Map();

map.set('name', 'Alice');
map.set(42, 'the answer');
map.set(true, 'boolean key');

console.log(map.get('name')); // Alice
console.log(map.get(42));     // the answer
console.log(map.size);        // 3
console.log(map.has(true));   // true

map.delete(true);

// Iterate over key-value pairs
for (const [key, value] of map) {
  console.log(`${key} → ${value}`);
}
```

**Map vs Object:**

| Feature | `Object` | `Map` |
|---|---|---|
| Key types | String / Symbol only | Any type |
| Order of keys | Not guaranteed (older engines) | Insertion order guaranteed |
| Size | Manual (`Object.keys().length`) | `.size` property |
| Iteration | Needs `Object.entries()` | Directly iterable |
| Better for | Static records | Dynamic key-value storage |

---

### `WeakSet` and `WeakMap`

**Weak** variants hold **weak references** to their keys — if the object used as a key has no other references, it can be **garbage collected** automatically.

#### `WeakSet`

- Stores only **objects** (no primitives)
- Not iterable, no `.size`
- Useful for tracking objects without preventing garbage collection

```javascript
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Bob' };

const weakSet = new WeakSet([obj1, obj2]);
console.log(weakSet.has(obj1)); // true

obj1 = null; // obj1 can now be garbage collected
```

#### `WeakMap`

- Keys must be **objects** (no primitives)
- Values can be anything
- Not iterable, no `.size`
- Useful for storing private metadata associated with objects

```javascript
const cache = new WeakMap();

function process(obj) {
  if (cache.has(obj)) {
    return cache.get(obj); // return cached result
  }
  const result = obj.value * 2; // expensive computation
  cache.set(obj, result);
  return result;
}

let data = { value: 21 };
console.log(process(data)); // 42

data = null; // entry is automatically removed from the WeakMap
```

---

### Quick Comparison

| Structure | Unique? | Key type | Iterable | Weak version |
|---|---|---|---|---|
| `Array` | No | Index (number) | ✅ | ❌ |
| `Set` | ✅ Values | — | ✅ | `WeakSet` |
| `Map` | ✅ Keys | Any | ✅ | `WeakMap` |
| `Object` | ✅ Keys | String / Symbol | ⚠️ (manual) | ❌ |