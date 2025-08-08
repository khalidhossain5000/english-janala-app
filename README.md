# English Janala App

A simple, interactive web application designed to help users learn basic English vocabulary and sentence structures.

## 🌐 Live Site : https://khalidhossain5000.github.io/english-janala-app

# Installation & Setup Guide


### 1. **Download or Clone the Project**

You can either:

- **Download ZIP**
  - Click the green **“Code”** button in the GitHub repository
  - Select **“Download ZIP”**
  - Extract the ZIP file to your desired location


# OR

### Prerequisites
*(Prerequisites means the things you need to have or prepare before you can run the project)*

- **Node.js** (version 16 or above) — [Download here](https://nodejs.org/)  
- **npm** (comes with Node.js)
- A **Firebase project** with Authentication enabled (Email/Google sign-in)

---
## Steps to Run Locally

### 1. **Clone the repository**
```bash
  git clone https://github.com/khalidhossain5000/english-janala-app.git
  
  cd the-voice-daily-newspaper-web-app

```

### 2.Install dependencies

```bash
### Using npm:

  npm install

  cd the-voice-daily-newspaper-web-app

```
### 3.Set up Firebase configuration

- Create a Firebase project in the Firebase Console.
- Enable Authentication methods (Email, Google sign-in).
- Copy your Firebase config object from project settings.
- Create a .env file in the root folder and add:

```bash

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
### Replace the values with your Firebase config.

### 4.Start the development server
```bash

npm run dev

```
###  Open your browser and go to
```bash

http://localhost:3000


```
## Your app should now be running locally!


## 📋 Features

- ✨ Easy-to-use interface for beginners
- 📖 Categories for learning words and sentences
- 🎧 Audio pronunciation support
- 📱 Fully responsive layout
- 🌙 Clean design and user-friendly navigation

## 🚀 Technologies Used

- HTML5
- CSS3
- JavaScript
- [Font Awesome](https://fontawesome.com/) (for icons)

