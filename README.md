Week 8 Capstone Project – E-commerce Frontend Application
Project Overview

This project is a React-based E-commerce Frontend Application developed as part of the Week 8 Capstone Task.
The application displays products from an external API and allows users to add items to a shopping cart and complete a checkout process.

The goal of this project is to demonstrate frontend development skills including React components, routing, state management, and API integration.

Features

Product listing using external API

Add products to cart

Cart page with total price calculation

Checkout form with validation

Navigation using React Router

State management using React Context API

Responsive UI with CSS styling

Technologies Used

React

Vite

JavaScript (ES6)

CSS

React Router

Context API

FakeStore API

Setup Instructions

Clone the repository

git clone https://github.com/your-username/ecommerce-app.git

Navigate to the project folder

cd ecommerce-app

Install dependencies

npm install

Start the development server

npm run dev

Open in browser

http://localhost:5173
Project Structure
src
 ├── components
 │    ├── Navbar
 │    ├── ProductList
 │    └── ProductCard
 │
 ├── pages
 │    ├── Home.jsx
 │    ├── CartPage.jsx
 │    └── CheckoutPage.jsx
 │
 ├── contexts
 │    └── CartContext.jsx
 │
 ├── hooks
 │    └── useProducts.js
 │
 ├── services
 │    └── api.js
 │
 ├── styles
 │
 ├── App.jsx
 └── main.jsx
Application Flow

User visits the Home Page and sees the product list.

User clicks Add to Cart to add products.

User opens the Cart Page to view selected items.

Total price is calculated automatically.

User clicks Proceed to Checkout.

User fills the checkout form and places the order.

API Used

Products are fetched from:

https://fakestoreapi.com/products
