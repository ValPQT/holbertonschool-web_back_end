# ES6 Promises & Async/Await — Learning Objectives

## 1. Promises — What, Why, and How

### What is a Promise?

A **Promise** is an object representing the eventual **completion or failure** of an asynchronous operation. It acts as a placeholder for a value that isn't available yet but will be at some point in the future.

A Promise is always in one of three states:

| State | Description |
|---|---|
| `pending` | Initial state — neither fulfilled nor rejected |
| `fulfilled` | The operation completed successfully |
| `rejected` | The operation failed |

Once a Promise is fulfilled or rejected, it is **settled** and its state can never change again.

### Why use Promises?

Before Promises, asynchronous code relied on **callbacks**, leading to deeply nested, hard-to-read code known as *"callback hell"*:

```javascript
// ❌ Callback hell
getUser(id, function(user) {
  getOrders(user, function(orders) {
    getInvoice(orders[0], function(invoice) {
      // deeply nested, hard to maintain...
    });
  });
});
```

Promises solve this by allowing you to **chain** asynchronous operations cleanly:

```javascript
// ✅ Clean Promise chain
getUser(id)
  .then(user => getOrders(user))
  .then(orders => getInvoice(orders[0]))
  .then(invoice => console.log(invoice))
  .catch(err => console.error(err));
```

### How to create a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation succeeded!'); // fulfills the Promise
  } else {
    reject(new Error('Something went wrong.')); // rejects the Promise
  }
});
```

> The executor function `(resolve, reject) => {}` runs **immediately** when the Promise is created.

---

## 2. `then`, `resolve`, and `catch`

### `.then(onFulfilled, onRejected)`

Handles the result of a **fulfilled** Promise. Returns a new Promise, enabling chaining.

```javascript
fetch('https://api.example.com/user')
  .then(response => response.json())   // transform the response
  .then(data => console.log(data));    // use the data
```

Each `.then()` receives the return value of the previous one.

### `resolve` and `reject`

`Promise.resolve()` and `Promise.reject()` create immediately settled Promises:

```javascript
// Already fulfilled
Promise.resolve(42).then(val => console.log(val)); // 42

// Already rejected
Promise.reject(new Error('Oops')).catch(err => console.error(err.message)); // Oops
```

### `.catch(onRejected)`

Handles **rejected** Promises. Equivalent to `.then(undefined, onRejected)`.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    if (!data) throw new Error('No data received');
    return data;
  })
  .catch(err => {
    console.error('Error caught:', err.message);
  });
```

> `.catch()` also catches errors **thrown inside** any `.then()` in the chain.

---

## 3. Every method of the Promise object

### `Promise.resolve(value)`

Returns a Promise that is **immediately fulfilled** with the given value.

```javascript
Promise.resolve('hello').then(console.log); // hello
```

### `Promise.reject(reason)`

Returns a Promise that is **immediately rejected** with the given reason.

```javascript
Promise.reject(new Error('fail')).catch(err => console.error(err.message)); // fail
```

### `Promise.all(iterable)`

Waits for **all** Promises to fulfill. Rejects immediately if **any one** rejects.

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => console.log(values)); // [1, 2, 3]

// If one fails, the whole thing fails
Promise.all([p1, Promise.reject('error'), p3])
  .catch(err => console.error(err)); // 'error'
```

> Use when you need **all results** and any failure should abort the operation.

### `Promise.allSettled(iterable)`

Waits for **all** Promises to settle (fulfill or reject). **Never rejects.**

```javascript
Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail'),
  Promise.resolve('also ok')
]).then(results => {
  results.forEach(result => console.log(result));
});
// { status: 'fulfilled', value: 'ok' }
// { status: 'rejected', reason: 'fail' }
// { status: 'fulfilled', value: 'also ok' }
```

> Use when you want to know the outcome of **every** Promise regardless of failure.

### `Promise.race(iterable)`

Returns a Promise that settles as soon as the **first** Promise settles (win or lose).

```javascript
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 3000));
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 500));

Promise.race([slow, fast]).then(winner => console.log(winner)); // 'fast'
```

> Use for **timeouts** or taking the fastest response.

### `Promise.any(iterable)`

Returns the first **fulfilled** Promise. Rejects only if **all** Promises reject (with an `AggregateError`).

```javascript
Promise.any([
  Promise.reject('error 1'),
  Promise.resolve('success'),
  Promise.reject('error 2')
]).then(value => console.log(value)); // 'success'
```

> Use when you need **at least one** success (e.g., querying multiple redundant servers).

### Summary table

| Method | Fulfills when | Rejects when |
|---|---|---|
| `Promise.all` | All fulfill | Any one rejects |
| `Promise.allSettled` | All settle (never rejects) | — |
| `Promise.race` | First one settles | First one rejects |
| `Promise.any` | First one fulfills | All reject |

### `.finally(onFinally)`

Runs a callback when the Promise settles, **regardless** of outcome. Does not receive any value.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .catch(err => console.error(err))
  .finally(() => console.log('Request finished.')); // always runs
```

> Use for cleanup tasks like hiding a loading spinner.

---

## 4. Throw / Try

In asynchronous code, `throw` inside a Promise chain behaves like calling `reject`. Combined with `.catch()`, it allows clean error propagation.

```javascript
Promise.resolve(10)
  .then(val => {
    if (val < 100) throw new Error('Value too small!');
    return val;
  })
  .catch(err => console.error(err.message)); // 'Value too small!'
```

With `async/await`, use the standard `try...catch` block:

```javascript
async function loadData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Failed to load data:', err.message);
  } finally {
    console.log('Done.');
  }
}
```

> `try` wraps the code to watch, `catch` handles any thrown error, and `finally` always executes.

---

## 5. The `await` operator

`await` **pauses execution** of an `async` function until the Promise settles, then returns its resolved value.

```javascript
async function getUser() {
  const response = await fetch('https://api.example.com/user/1');
  const user = await response.json();
  console.log(user.name);
}
```

Key rules:
- `await` can **only be used inside** an `async` function (or at the top level of a module)
- It makes asynchronous code look and behave like synchronous code
- If the awaited Promise rejects, it **throws** an error (catchable with `try/catch`)

```javascript
// Sequential (each waits for the previous)
const a = await fetchA();
const b = await fetchB();

// Parallel (both start at the same time)
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```

> Prefer `Promise.all` when operations are **independent** — sequential `await` is slower.

---

## 6. How to use an `async` function

The `async` keyword turns any function into a function that **always returns a Promise**.

```javascript
async function greet(name) {
  return `Hello, ${name}!`;
}

greet('Alice').then(console.log); // Hello, Alice!
```

Even if you return a plain value, it is automatically wrapped in a resolved Promise.

### Full example

```javascript
async function getUserPosts(userId) {
  try {
    // Fetch user and their posts in parallel
    const [userRes, postsRes] = await Promise.all([
      fetch(`https://api.example.com/users/${userId}`),
      fetch(`https://api.example.com/posts?userId=${userId}`)
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    return { user, posts };
  } catch (err) {
    console.error('Could not load user data:', err.message);
    return null;
  }
}

// Calling an async function
getUserPosts(1).then(data => {
  if (data) console.log(`${data.user.name} has ${data.posts.length} posts.`);
});
```

### `async` with arrow functions and class methods

```javascript
// Arrow function
const fetchData = async (url) => {
  const res = await fetch(url);
  return res.json();
};

// Class method
class ApiService {
  async getUser(id) {
    const res = await fetch(`/api/users/${id}`);
    return res.json();
  }
}
```

---

## Quick Reference

```
new Promise((resolve, reject) => { ... })   → Create a Promise
.then(value => ...)                         → Handle success
.catch(err => ...)                          → Handle failure
.finally(() => ...)                         → Always runs

Promise.resolve(val)                        → Instantly fulfilled
Promise.reject(err)                         → Instantly rejected
Promise.all([...])                          → All or nothing
Promise.allSettled([...])                   → All outcomes
Promise.race([...])                         → First to settle
Promise.any([...])                          → First to succeed

async function f() { ... }                  → Always returns a Promise
await somePromise                           → Pause until settled
try { await ... } catch(e) { ... }          → Handle async errors
```