# Simple API and Frontend Page

## Project Overview
This project consists of a backend built with Node.js and Express and a frontend built with React.js. The API provides a greeting message based on user input, and the frontend interacts with this API to display the response.

## Features
- Backend API to return a greeting message.
- React frontend with an input field and a button to request the greeting.
- Displays the greeting message dynamically.

---

## 1. Backend (Node.js & Express)
### Setup Instructions

1. **Clone the Repository**

git clone https://github.com/panditsandhya/greetTask


2. **Install Dependencies*

npm install

3. **Run the Server**

node server.js


4. **API Endpoint**

   - **GET /api/greet?name=YourName**


5. **Testing API in Postman**
   - Open Postman.
   - Make a 'GET' request to "http://localhost:5000/api/greet?name=John".
   - You should receive a JSON response with a greeting message.

---

## 2. Frontend (React.js)
### Setup Instructions
1. **Navigate to the frontend folder**

cd frontend

2. **Install Dependencies**

npm install

3. **Run the Frontend**

npm run dev


4. **Using the Application**
   - Open http://localhost:3000 in your browser.
   - Enter your name in the input field.
   - Click "Get Greeting" to fetch a response from the API.
   - The greeting message will be displayed on the page.


## 4. Technologies Used
- **Backend:** Node.js, Express
- **Frontend:** React.js
- **Tools:** Postman (API testing)



## 6. Author
Developed by [Sandhya Kumari].

