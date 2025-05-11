# 🏕️ YelpCamp

A full-stack web application for discovering, reviewing, and managing campgrounds. Built with **Node.js**, **Express**, **MongoDB**, and **EJS**, this app allows users to register, log in, add new campgrounds, write reviews, upload images, and interact with content dynamically — all with proper session management and error handling.

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templating, Bootstrap
- **Authentication**: Passport.js with passport-local-mongoose
- **Validation & Security**: JOI, Express-Mongo-Sanitize, Connect-Flash
- **Image Uploads**: Local image handling (via Multer or placeholder images)
- **Session Management**: express-session

---

## 🚀 Features

### 🧑‍💻 Authentication & Authorization
- User registration and login/logout via Passport.js
- Secure session handling with flash messages
- Access control for editing/deleting campgrounds and reviews

### 🗺️ Campgrounds
- View a list of all campgrounds
- View individual campground detail pages
- Create new campgrounds with title, location, price, and description
- Upload multiple images (placeholder used if not implemented)
- Edit and delete own campgrounds

### ⭐ Reviews
- Submit reviews for each campground (rating + comment)
- Display all reviews per campground
- Logged-in users can delete **their own** reviews
- Star ratings with a visual CSS-based component

### 🖼️ Image Carousel
- Image slideshow on each campground page using Bootstrap's carousel

### 🧠 Smart Templates
- Template protection against missing data (e.g., no author, no reviews)
- Conditionally show "Edit" and "Delete" buttons based on user permissions

### 🔒 Input Protection
- Sanitization against MongoDB injection
- Server-side validation of form inputs

### 🧪 Custom Error Handling
- Graceful handling of invalid routes and unexpected errors
- Custom error page using ExpressError utility

---

## 📁 Folder Structure

```

yelpcamp/
├── controllers/        # Route logic (campgrounds, users, reviews)
├── models/             # Mongoose models: User, Campground, Review
├── routes/             # Express routers: campgrounds, users, reviews
├── views/              # EJS templates (with layout support)
├── public/             # Static assets (CSS, JS, stars.css)
├── seeds/              # Seed script and data files
├── utils/              # Custom error and async wrappers
├── app.js              # Main Express app file

````

---

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/yelpcamp.git
cd yelpcamp
````

### 2. Install dependencies

```bash
npm install
```

### 3. Seed the database (optional but recommended)

```bash
node seeds/index.js
```

### 4. Start MongoDB

Ensure MongoDB is running on `localhost:27017`

### 5. Run the app

```bash
node app.js
```

Visit `http://localhost:3000` in your browser.

---

## 📸 Screenshots Included

* Home Page (`/campgrounds`)
* Show Campground (with reviews and carousel)
* Register / Login pages
* Campground Edit Form
* Review Delete Buttons

---

## 🧑 Author

**Hassan Mroueh**
Master’s Student in Automation & Robotics – TU Dortmund

---

## 📄 License


