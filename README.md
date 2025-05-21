# BookEcom
This is my first project on MERN Stack
# 📚 MERN Bookstore E-commerce Website

An online bookstore built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project allows users to browse and purchase books across various categories with features like user authentication, cart management, Razorpay payment integration, and admin book management.

---

## 🚀 Features

### 👥 User Features
- 📖 Browse books by categories (e.g., Action & Adventure, Vedas, Comics, Novels)
- 🔍 Search and filter books
- 🛒 Add books to cart
- 💳 Secure checkout with **Razorpay** payment gateway
- 📨 Email verification on registration
- 🔐 User registration and login with JWT-based authentication

### 🔧 Admin Features
- ➕ Add new books with title, author, category, price, and image
- 🗑️ Remove or update book details
- 📊 Manage inventory through a secure admin dashboard

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux (if applicable)
- React Router
- Axios
- Tailwind CSS or Bootstrap (optional)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email verification
- Razorpay API for payment processing

---

## 🧪 Installation & Setup

### Prerequisites
- Node.js and npm
- MongoDB
- Razorpay account
- (Optional) Nodemailer email credentials

### Clone the Repository

git clone https://github.com/your-username/mern-bookstore.git
cd mern-bookstore


#BackEnd
cd backend
npm install
Create a `.env` file with the following:
  PORT=5000
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_secret_key
  RAZORPAY_KEY_ID=your_key_id
  RAZORPAY_KEY_SECRET=your_key_secret
  EMAIL_USER=your_email
  EMAIL_PASS=your_email_password

npm run raj app.js



#FrontEnd

cd frontend
npm install
npm start




