# 🔐 Netflix Sign-In Clone (React + Node + Express)

A simple Netflix-style **Sign In application** built using **React (frontend)** and **Node.js + Express (backend)**. Users can enter credentials and get authenticated via an API.

---

## 🚀 Live Demo

* 🌐 Frontend: https://netflix-login-lyart.vercel.app/
* ⚙️ Backend: https://netflix-login-pu5d.onrender.com

---

## 📂 Project Structure

```
Netflix-Login/
│
├── frontend/      # React UI (Sign In Page)
├── backend/       # Express API (Authentication)
└── README.md
```

---

## 🧠 Tech Stack

* ⚛️ React
* 🌐 Axios
* 🎨 Tailwind CSS
* 🟢 Node.js
* 🚀 Express.js
* ☁️ Vercel (Frontend)
* ☁️ Render (Backend)

---

## 🔑 Sign In Feature

* User enters **username & password**
* Frontend sends request using Axios
* Backend validates credentials
* Redirects to dashboard on success
* Shows error message on failure

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
npm start
```

Runs on:

```
http://localhost:5000
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoint

### Sign In

```
GET /login?username=User&password=283
```

### Example

```
http://localhost:5000/login?username=User&password=283
```

Response:

```
true / false
```

---

## 🌍 Deployment

### Backend (Render)

* Root Directory: `backend`
* Build: `npm install`
* Start: `npm start`

---

### Frontend (Vercel)

* Root Directory: `frontend`
* Update API:

```js
const API = "https://netflix-login-pu5d.onrender.com";
```

---

## ⚠️ Notes

* ❌ Do NOT use `localhost` in production
* ✔ Use deployed backend URL
* ✔ Deploy backend first

---

## 🚀 Future Improvements

* Use POST instead of GET
* Add JWT authentication
* Secure passwords with bcrypt
* Add database (MongoDB)

---

## 👨‍💻 Author

**Dharani K**

---

# Netflix-Signin
