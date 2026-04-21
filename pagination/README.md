# Pagination

## Description

This project covers the implementation of pagination techniques in Python for back-end web development. It demonstrates how to paginate a dataset using simple helper functions, hypermedia metadata, and deletion-resilient pagination strategies.

## Requirements

- Ubuntu 20.04 LTS
- Python 3.9
- pycodestyle 2.5.*

## Setup

Download the data file for the project:

- `Popular_Baby_Names.csv`

## Tasks

### 0. Simple helper function

**File:** `0-simple_helper_function.py`

Write a function `index_range` that takes two integer arguments `page` and `page_size` and returns a tuple containing a start index and an end index corresponding to the range of indexes to return in a list for those particular pagination parameters.

Page numbers are 1-indexed, meaning the first page is page 1.

**Example:**
```python
res = index_range(1, 7)
# (0, 7)

res = index_range(page=3, page_size=15)
# (30, 45)
```

## Author

ValPQT