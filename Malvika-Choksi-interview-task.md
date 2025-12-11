

# **React.js Developer Interview Task**

## **🎯 Objective**

Build a small e-commerce frontend application using **React.js** and **Redux** with data from:
👉 **[https://dummyjson.com/products](https://dummyjson.com/products)**

This app should include **product listing, pagination, search, filtering, add-to-cart, and a simple login system**.

---
# **Task Rules & Restrictions**

*  Can you use AI tools, but direct copy/pasting of AI-generated code is not allowed
*  Using Google Search for documentation
*  Referring to StackOverflow for troubleshooting
*  Reading official documentation
---
# 🔧 **Requirements**

## **1️⃣ Authentication (Simple Local Login)**

* Create a login page with:

  * **Static credentials** (example):

    * Email: `test@example.com`
    * Password: `123456`
* On successful login:

  * Store user info in **localStorage**
  * Redirect user to product listing page
* If user is not logged in, they should not access any inner pages.

---

## **2️⃣ Product Listing Page**

Fetch products from:

```
GET https://dummyjson.com/products
```

### **Features Required**

### ✔ Pagination

Use API pagination:

```
GET https://dummyjson.com/products?limit=10&skip=0
```

* Show **10 products per page**
* Add **Next / Previous buttons**
* Add page numbers if possible

---

### ✔ Search (By Name)

Use this API:

```
GET https://dummyjson.com/products/search?q=phone
```

* Should filter results by product name
* Works together with pagination

---

### ✔ Filter by Category

Fetch categories:

```
GET https://dummyjson.com/products/categories
```

Filter products by category:

```
GET https://dummyjson.com/products/category/smartphones
```

---

### ✔ Product Card Layout

Each product must show:

* Image
* Name
* Price
* Category
* "Add to Cart" button

---

## **3️⃣ Cart Functionality (Using Redux)**

Use **Redux Toolkit** or simple Redux.

### Cart Must Support:

* Add product to cart
* Remove product from cart
* Increase quantity
* Decrease quantity
* Show cart count in Navbar (top right)
* Cart data stored in **Redux** (NOT localStorage)

---

## **4️⃣ Global State Management**

Must use **Redux** for:

* User data
* Products
* Cart

---

## **5️⃣ UI Requirements**

* Must include a **Header/Navbar** with:

  * App name
  * Search bar
  * Cart count badge
  * Logout button

* Logout must:

  * Clear localStorage
  * Reset Redux state
  * Redirect to login page

---

## **6️⃣ Bonus (Optional but Good to Have)**

* Product detail page
* Loading skeletons
* Error handling (network errors)
* Responsive UI
* Using React Router for page navigation

---


# 📝 **Deliverables**

Candidate must provide:

✔ GitHub repo link (Need to push code in this repo)
✔ Steps to run the project
✔ Short documentation explaining structure & Redux flow

---

# 💡 **Evaluation Criteria**

* Code quality, reusability, folder structure
* Clean UI & UX
* Correct use of Redux
* Correct API integration
* Pagination, search, category filters working properly
* Cart logic accuracy

---
