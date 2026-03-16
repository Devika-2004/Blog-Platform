# 📝 Blog Platform (MERN Stack)

A full-stack Blog Platform built using the MERN stack where users can register, login, and create blogs with authentication and authorization.

---

## 🚀 Features

* User Registration
* User Login (JWT Authentication)
* Create Blog Posts
* Protected Routes
* MongoDB Database Integration
* REST API using Express.js
* React Frontend

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

**Database**

* MongoDB

---

## 📁 Project Structure

```
blog-platform
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── public
│   └── src
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/blog-platform.git
```

### 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

### 3️⃣ Install Frontend Dependencies

```
cd ../frontend
npm install
```

---

## ▶️ Run the Project

### Start Backend

```
cd backend
npm start
```

### Start Frontend

```
cd frontend
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend folder and add:

```
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://127.0.0.1:27017/blogPlatform
```

---

## 📌 API Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |
| GET    | /api/blogs         | Get All Blogs |
| POST   | /api/blogs         | Create Blog   |

---

## 📷 Future Improvements

* Blog editing
* Blog deletion
* Image upload
* User dashboard
* Comments system

---

## 👩‍💻 Author

**Devika Warekar**
MSc Computer Science Student
