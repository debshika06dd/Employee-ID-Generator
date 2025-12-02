# Employee ID Generator

A simple and interactive web-based application that allows users to generate an Employee ID Card by filling a form. The generated ID card displays the employee's photo, name, designation, employee number, mobile number, and email ID in a clean card layout.

***Website live at:*** *https://debshika06dd.github.io/Employee-ID-Generator/*

---

# 🚀 Features
+ Fill out a simple form to generate an Employee ID card

+ Live redirection to card.html with dynamic data using URL parameters

+ Input validation for all required fields

+ Clean UI with modern design

+ Auto-handling of broken image URLs by using a fallback placeholder

+ Secure text insertion using simple HTML escaping

+ Fully responsive and works in any modern browser

---

# 🖥️ How It Works

1️⃣ User fills the form

Fields include:

+ Employee Name

+ Designation

+ Employee Number

+ Photo URL

+ Mobile Number

+ Email ID

2️⃣ Validation

If any field is empty, a specific alert is shown.

3️⃣ Redirection

After validation, JavaScript redirects to:

card.html?name=...&desig=...&num=...&photo=...&mob=...&email=...

4️⃣ ID Card is generated

card.js reads the parameters and displays a formatted ID card with:

+ Circular photo

+ Name and designation

+ Employee ID

+ Mobile number

+ Email

If the image URL fails to load, a placeholder is automatically shown.

---

# 🛠️ Technologies Used

* HTML5 — Structure

* CSS3 — Styling and layout

* JavaScript (Vanilla) — Form handling, validation, dynamic rendering

---
