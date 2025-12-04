# 🎬 Flick.id — Front-End Documentation

Welcome to **Flick.id** — a modern movie-streaming platform featuring elegant design, high performance, and a smooth user experience.  
This guide explains the project, its technologies, and how to install and run it locally.

---

## 🌟 About the Project

**Flick.id** is a feature-rich movie platform with:

- 📚 **Movie catalog**
- 🎭 **Genres & filtering**
- 🔄 **Infinite scroll pagination**
- ▶️ **Custom video player**
- ⭐ **Watch-later list**
- 🕓 **Watch history**
- 👤 **Account creation & profile editing**
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

1. React  
2. Next.js  
3. SCSS  
4. Tailwind CSS  
5. clsx  
6. axios  
7. dayjs  
8. jotai  
9. jose  
10. js-cookie  
11. lucide-react  
12. react-apexcharts  
13. react-hook-form  
14. react-hot-toast  
15. react-query  

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

Go to the backend repository, download it, configure it, and run the API server.

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



