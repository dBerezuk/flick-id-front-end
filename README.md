# 🎬 Flick.id — Front-End Documentation

Welcome to **Flick.id** — a modern movie-streaming platform featuring elegant design, high performance, and a smooth user experience.  
This guide explains the project, its technologies, and how to install and run it locally.

---

## 🎥 Platform Preview

### 📱 Screenshots

<div align="center">
  <img src="/docs/images/1.png" width="200" style="margin: 5px;">
  <img src="/docs/images/2.png" width="200" style="margin: 5px;">
  <img src="/docs/images/3.png" width="200" style="margin: 5px;">
  <img src="/docs/images/4.png" width="200" style="margin: 5px;">
  <img src="/docs/images/5.png" width="200" style="margin: 5px;">
  <img src="/docs/images/6.png" width="200" style="margin: 5px;">
  <img src="/docs/images/7.png" width="200" style="margin: 5px;">
  <img src="/docs/images/8.png" width="200" style="margin: 5px;">
  <img src="/docs/images/9.png" width="200" style="margin: 5px;">
  <img src="/docs/images/10.png" width="200" style="margin: 5px;">
  <img src="/docs/images/11.png" width="200" style="margin: 5px;">
  <img src="/docs/images/12.png" width="200" style="margin: 5px;">
  <img src="/docs/images/13.png" width="200" style="margin: 5px;">
  <img src="/docs/images/14.png" width="200" style="margin: 5px;">
  <img src="/docs/images/15.png" width="200" style="margin: 5px;">
  <img src="/docs/images/16.png" width="200" style="margin: 5px;">
  <img src="/docs/images/17.png" width="200" style="margin: 5px;">
  <img src="/docs/images/18.png" width="200" style="margin: 5px;">
  <img src="/docs/images/19.png" width="200" style="margin: 5px;">
  <img src="/docs/images/20.png" width="200" style="margin: 5px;">
</div>

### 🎥 Video Demonstration

Watch the complete platform demonstration on YouTube:

[![Flick.id Demo Video](https://img.shields.io/badge/🎬_Watch_Demo_Video-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/-uKLePrh0ys)

---

## 🌟 About the Project

**Flick.id** is a feature-rich movie platform with:

- 📚 **Movie catalog**
- 🎭 **Genres & filtering**
- 🔄 **Infinite scroll pagination**
- ▶️ **Custom video player**
- 👤 **Account creation & profile editing**
- ⭐ **Watch-later list**
- 🕓 **Watch history**
- 🔍 **Search functionality**
- 🛠 **Admin panel** for managing:
  - movies  
  - genres  
  - users  
  - catalog  
  - statistics (with charts)
- ⚡ **High-speed data loading using ISR + caching** — fast UI and reduced backend load

---

## 🧩 Technologies Used

1. JavaScript & TypeScript
2. React  
3. Next.js
4. react-query
5. jose
6. js-cookie
7. axios
8. jotai
9. dayjs
10. react-hook-form
11. SCSS  
12. Tailwind CSS  
13. clsx          
14. lucide-react  
15. react-apexcharts    
16. react-hot-toast

---

# 🛠 Installation & Setup Instructions

Below is the complete guide to running Flick.id locally.

---

## 📌 Prerequisites

Make sure you have installed:

- **Node.js**
- **npm** or **Yarn**

Check versions:

```bash
node -v
npm -v
# or
yarn -v
```

🚀 **Setup Steps**

### Step 1 — Clone the repository

```bash
git clone https://github.com/dBerezuk/flick-id-front-end.git
cd flick-id-front-end
```

### Step 2 — Start the backend

Go to the backend [repository](https://github.com/dBerezuk/flick-id-back-end), download it, configure it, and run the API server.

⚠️ The frontend requires an active backend.

### Step 3 - Install dependencies

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn
```

#### Step 4 — Configure environment variables
Create a `.env` file in the root directory and add the following configuration:

```env
# Server URLs
NEXT_PUBLIC_URL_SERVER=http://localhost:4201
NEXT_PUBLIC_URL_API=http://localhost:4201/api

# Authentication
AUTH_SECRET=123
AUTH_ISSUER=localhost:4201
AUTH_AUDIENCE=localhost:3000

# Default avatar URL
NEXT_PUBLIC_DEFAULT_AVATAR_URL=/images/user-default-avatar.jpg
```

> **Note:** Make sure the backend server is running on port 4201. If your backend uses a different port, update the URLs accordingly.


### Step 5 - Run the development server

Using npm:

```bash
npm run dev
# or
npm start
```

Using Yarn:

```bash
yarn dev
# or
yarn start
```

Open the application
Once the server is running, open:
http://localhost:3000



