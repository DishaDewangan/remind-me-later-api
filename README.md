# Remind-me-later API

This project is part of an initial screening exercise to move to the next level of the hiring process.

## 📌 Project Overview

**Remind-me-later** is a simple web application that allows users to set up reminders with a message. The frontend UI is already developed and accepts the following data:

- **Date** – When the reminder should be triggered  
- **Time** – Exact time of the reminder  
- **Message** – The actual reminder content  
- **Method** – How the user wants to be reminded (currently supports `sms` and `email`)  

As a backend developer, my task was to implement an API endpoint that accepts this data and stores it in a database.

> ⚠️ **Note:** This API **does not handle actual reminder delivery via SMS or Email.** The backend only stores the submitted reminder data, as required.

---

## 🛠️ Tech Stack

- **Language**: JavaScript  
- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB (with Mongoose ODM)  

---

## 📦 API Endpoint

### `POST /api/reminders`

Accepts reminder details and stores them in the database.

#### 🔸 Request Body (JSON)

```json
{
  "date": "2025-05-25",
  "time": "09:00",
  "message": "Team stand-up meeting",
  "method": "email"
}
````

* `date` – required (format: `YYYY-MM-DD`)
* `time` – required (format: `HH:mm`)
* `message` – required (string)
* `method` – required (`email` or `sms`)

#### ✅ Success Response

```json
{
  "message": "Reminder saved successfully",
  "reminder": {
    "_id": "objectId",
    "date": "2025-05-25",
    "time": "09:00",
    "message": "Team stand-up meeting",
    "method": "email",
    "__v": 0
  }
}
```

#### ❌ Error Response

```json
{
  "error": "date, time, message and method are required"
}
```

---

## 🚀 How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/remind-me-later-api.git
cd remind-me-later-api
```

2. Install dependencies

```bash
npm install
```

3. Set up your MongoDB connection

In `server.js`, replace `<your_mongo_uri>` with your actual MongoDB URI.

4. Start the server

```bash
node server.js
```

The server will start on:
**[http://localhost:5000](http://localhost:5000)**

---

## 🧪 Testing the API

You can test the endpoint using Postman, curl, or any HTTP client.

### Example curl request:

```bash
curl -X POST http://localhost:5000/api/reminders \
-H "Content-Type: application/json" \
-d '{
  "date": "2025-05-25",
  "time": "09:00",
  "message": "Team stand-up meeting",
  "method": "email"
}'
```

---

## ✅ Assignment Requirements Covered

* [x] Created an API endpoint using the framework of choice
* [x] Accepted required data: date, time, message, method
* [x] Stored the reminder in MongoDB
* [x] Did not implement actual message delivery logic
* [x] Used JavaScript and Node.js as allowed in the assignment

---

## 👤 Author

**Disha Dewangan**
Backend Developer | B.Tech in Computer Science
[GitHub](https://github.com/DishaDewangan)

---

## 📎 Submission

GitHub Repository: [https://github.com/your-username/remind-me-later-api](https://github.com/DishaDewangan/remind-me-later-api)








