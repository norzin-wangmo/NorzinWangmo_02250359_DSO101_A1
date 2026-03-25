# Assignment 2 – CI/CD Pipeline for To-Do List Application

## 📌 Project Overview

This project is a full-stack To-Do List web application developed using **Node.js, Express, and MongoDB**, integrated with a **CI/CD pipeline using Jenkins**.

The application supports full **CRUD (Create, Read, Update, Delete)** operations and demonstrates how modern DevOps practices automate building, testing, and deployment.

---

## 🚀 Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Data persistence using MongoDB
* Form validation
* Automated testing using Jest and Supertest
* Docker containerization
* Jenkins CI/CD pipeline

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB (Mongoose)
* EJS
* Jest & Supertest
* Docker
* Jenkins

---

## 🗄️ Database

MongoDB is used as the primary database.

It ensures that all tasks are stored permanently and not lost when the server restarts. This addresses issues from earlier implementations where data was not persisted.

---

## ⚙️ CI/CD Pipeline (Jenkins)

The Jenkins pipeline is defined using a **Jenkinsfile** and includes the following stages:

1. **Checkout**
   Fetch source code from GitHub.

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Build**

   ```
   npm run build
   ```

4. **Test**

   ```
   npm test
   ```

   * Generates `junit.xml`
   * Results displayed in Jenkins

5. **Deployment**

   * Docker image is built
   * Image is pushed to Docker Hub

---

## 🐳 Docker Setup

### Build Image

```
docker build -t your-dockerhub-username/todo-app:latest .
```

### Run Container

```
docker run -p 3000:3000 --env-file .env your-dockerhub-username/todo-app:latest
```

---

## 🔐 Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
```

---

## 🧪 Testing

Testing is implemented using **Jest and Supertest**.

Run tests:

```
npm test
```

Test coverage includes:

* Create task
* Read tasks
* Update task
* Delete task

---

## 💻 How to Run Locally

```
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📂 Repository & Deployment

* **GitHub Repository:** To be added
* **Docker Hub Image:** To be updated after deployment

---

## ⚠️ Challenges Faced

* Initial failure due to missing database integration
* Difficulty configuring Jenkins pipeline
* Issues generating test reports for Jenkins
* Docker image push setup

---

## ✅ Solutions

* Integrated MongoDB using Mongoose
* Configured Jest with JUnit reporting
* Structured Jenkins pipeline correctly
* Verified Docker build process

---

## 📸 Screenshots Required

* Jenkins pipeline success
* Test results in Jenkins
* Docker image in Docker Hub
* GitHub repository with Jenkinsfile
* Working application (CRUD)
* MongoDB database records

---

## 🎯 Conclusion

This project demonstrates how a full-stack application can be integrated with a CI/CD pipeline. It highlights the importance of automation, testing, and deployment in modern software development.

---

## 📌 Note

Docker Hub image and Screenshots will be updated after deployment is completed.

## Repo link - [GitHub Repository](https://github.com/norzin-wangmo/NorzinWangmo_02250359_DSO101_Works.git)
