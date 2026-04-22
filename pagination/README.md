# Pagination Project

## 📚 Learning Objectives

At the end of this project, I am able to explain the following concepts:

---

## 1. How to paginate a dataset with simple page and page_size parameters

Simple pagination consists of dividing a dataset into smaller chunks (pages) using two parameters:

- **page**: the current page number (starting from 1)
- **page_size**: the number of items per page

The indexes are calculated using the formula:


start_index = (page - 1) * page_size
end_index = start_index + page_size


This allows us to slice the dataset and return only the relevant portion.

Example:
- page = 2, page_size = 10 → returns items from index 10 to 19

This method is simple and efficient but can become inconsistent if the dataset changes.

---

## 2. How to paginate a dataset with hypermedia metadata

Hypermedia pagination improves simple pagination by returning additional metadata along with the data.

Instead of returning only the dataset, we return a dictionary containing:

- **page_size**: number of items returned
- **page**: current page number
- **data**: the actual dataset slice
- **next_page**: next page number (or None)
- **prev_page**: previous page number (or None)
- **total_pages**: total number of pages

This approach makes it easier for clients (e.g., frontends or APIs) to navigate through pages without calculating values themselves.

---

## 3. How to paginate in a deletion-resilient manner

In real-world applications, datasets can change between requests (e.g., rows can be deleted).

Using traditional pagination (based on index ranges) can lead to:
- missing data
- duplicated data

To solve this, we use a **deletion-resilient pagination strategy**:

- Store the dataset as a dictionary indexed by position
- Iterate through indexes instead of slicing
- Skip missing indexes if data has been deleted
- Always return the correct number of items

This ensures:
- no data is skipped
- no duplicates appear
- pagination remains consistent even when the dataset changes

---

## 🧠 Conclusion

This project demonstrates three levels of pagination:

1. Basic pagination using index ranges
2. Enhanced pagination with metadata (API-friendly)
3. Robust pagination that handles dataset mutations

These concepts are essential for building scalable and reliable backend systems.