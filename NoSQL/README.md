# NoSQL Project

## 📚 Learning Objectives

At the end of this project, I am able to explain the following concepts:

---

## 🧠 What NoSQL means

NoSQL stands for **“Not Only SQL”**.  
It refers to databases that do not use the traditional relational model (tables, rows, columns).  

NoSQL databases are designed to handle **large volumes of data**, **high scalability**, and **flexible data structures**.

---

## 🆚 Difference between SQL and NoSQL

- **SQL databases**:
  - Use tables with rows and columns
  - Have a fixed schema
  - Support complex queries with JOINs
  - Example: MySQL, PostgreSQL

- **NoSQL databases**:
  - Use flexible data models (JSON, key-value, etc.)
  - Schema is dynamic
  - Designed for scalability and performance
  - Example: MongoDB, Redis

---

## 🔒 What is ACID

ACID is a set of properties that guarantee reliable database transactions:

- **Atomicity**: a transaction is all or nothing  
- **Consistency**: data remains valid after a transaction  
- **Isolation**: transactions do not interfere with each other  
- **Durability**: once committed, data is permanently stored  

SQL databases usually follow ACID strictly, while NoSQL systems may relax some of these guarantees for better performance.

---

## 📄 What is a document storage

Document storage is a type of NoSQL database where data is stored as **documents**, usually in JSON format.

Example:
```json
{
  "name": "Alice",
  "age": 25,
  "skills": ["Python", "MongoDB"]
}

Each document can have a different structure, making it very flexible.

🧩 What are NoSQL types

There are four main types of NoSQL databases:

Document stores (e.g., MongoDB)
Key-value stores (e.g., Redis)
Column-oriented databases (e.g., Cassandra)
Graph databases (e.g., Neo4j)
⚡ Benefits of a NoSQL database
Flexible schema (no strict structure)
High scalability (especially horizontal scaling)
High performance for large datasets
Suitable for unstructured or semi-structured data
Easy integration with modern applications (APIs, JSON)
🔍 How to query information from a NoSQL database

In MongoDB, data is queried using JSON-like syntax:

db.users.find({ name: "Alice" })

This retrieves all documents where the name is "Alice".

✏️ How to insert/update/delete information
Insert
db.users.insertOne({ name: "Alice", age: 25 })
Update
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)
Delete
db.users.deleteOne({ name: "Alice" })
🍃 How to use MongoDB

MongoDB is a popular NoSQL document database.

Basic steps:

Start MongoDB server
Use the Mongo shell or a driver (Python, Node.js, etc.)
Create a database:
use mydatabase
Insert data:
db.users.insertOne({ name: "Alice" })
Query data:
db.users.find()

MongoDB stores data in collections, which are similar to tables, but without a fixed schema.

🧠 Conclusion

NoSQL databases provide a flexible and scalable alternative to traditional SQL databases.
They are especially useful for modern applications dealing with large, dynamic, or unstructured data.