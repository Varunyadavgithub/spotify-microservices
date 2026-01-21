# 🎵 Spotify Clone – Microservices Based Music Streaming Platform

A scalable music streaming platform inspired by **Spotify**, built using **MERN Stack + PostgreSQL** and powered by a **microservices architecture**.
This project focuses on real-world system design, service separation, and production-ready deployment.

> 🚀 This is my **first microservices-based project**, built after learning core microservices concepts.

---

## 📌 Features

### 👤 User Features

* User authentication & authorization (JWT)
* Browse & stream music
* Create and manage playlists
* Responsive Spotify-like UI
* Secure music streaming

### 🛠️ Admin Features

* Admin authentication
* Upload & manage songs
* Manage playlists
* Control platform content

---

## ⚙️ Architecture Highlights

* Microservices-based backend
* Independent services for scalability
* Redis integration for performance optimization
* Cloud deployment using AWS EC2

---

## 🧩 Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS
* HTML5 Audio API

### Backend (Microservices)

* Node.js
* Express.js
* MongoDB
* PostgreSQL
* Typescript
* Redis
* JWT Authentication

### DevOps & Deployment

* AWS EC2
* Nginx
* PM2
* Git & GitHub

---

## 🏗️ Microservices Architecture

This project follows a **distributed microservices approach**, where each service handles a specific responsibility.

### 🔹 Services Breakdown

| Service       | Responsibility                           |
| ------------- | ---------------------------------------- |
| User Service  | Authentication, user management          |
| Admin Service | Admin access, song & playlist management |
| Song Service  | Uploading, streaming, caching music      |
| Frontend      | User interface (React)                   |

> Each service runs independently and communicates via APIs, making the system scalable and maintainable.

---

## 🔐 Authentication & Security

* JWT-based authentication
* Role-based access control (User / Admin)
* Secure API endpoints
* Token-based authorization

---

## 🚀 Project Demo Flow

1. User registers / logs in
2. JWT token issued
3. User streams music
4. Admin uploads & manages songs
5. Redis caches frequently accessed data
6. Microservices handle requests independently

---

## 📁 Project Structure

```bash
spotify-clone-microservices/
│
├── user-service/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.js
│
├── admin-service/
│   ├── controllers/
│   ├── routes/
│   └── index.js
│
├── song-service/
│   ├── controllers/
│   ├── routes/
│   └── index.js
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Varunyadavgithub/spotify-microservices.git
```

### 2️⃣ Install Dependencies

```bash
cd user-service && npm install
cd ../admin-service && npm install
cd ../song-service && npm install
cd ../frontend && npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in **each service** and add:

```env
PORT=5000
JWT_SECRET=your_secret
DB_URL=your_database_url
REDIS_URL=your_redis_url
```

### 4️⃣ Run Services

```bash
npm start
```

---

## ☁️ Deployment

* Deployed on **AWS EC2**
* **Nginx** used as reverse proxy
* **PM2** for process management

📄 **AWS EC2 Deployment Guide**
👉 [https://drive.google.com/](https://drive.google.com/)...

---

## 🖼️ Assets & Resources

* 🎨 Project Images: [https://drive.google.com/](https://drive.google.com/)...
* 📂 Source Code: [https://github.com/mep](https://github.com/mep)...

---

## ⏰ Video Timestamps (Learning Reference)

* 00:00:00 – Introduction
* 00:00:46 – About Microservices
* 00:06:06 – Project Demo
* 00:11:36 – User Service
* 01:14:43 – Admin Service
* 02:37:54 – Song Service
* 02:55:39 – Redis Integration
* 03:31:23 – Frontend
* 08:17:50 – Deployment

---

## 📈 Learning Outcomes

* Real-world microservices design
* MERN + PostgreSQL integration
* Scalable backend architecture
* Redis caching
* Cloud deployment experience

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📬 Contact

If you liked this project or want to collaborate:

* 💼 LinkedIn: `your-link`
* 💻 GitHub: `your-username`

---

⭐ **If you found this project useful, don’t forget to star the repo!**

---

### Want to improve this further?

I can help you:

* 🔥 Optimize this README for **resume & recruiters**
* 📊 Add **architecture diagrams**
* 🧠 Write a **microservices explanation section**
* 🏷️ Create **GitHub topics & tags**

Just tell me 👍
