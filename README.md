Little Light Application
========================

**Little Light** is a web-based platform designed to support users in wellness and therapy, featuring user and therapist profiles, booking capabilities, journaling, feedback submission, and a music library with category-based browsing and favorites.

Tech Stack
----------

*   **Frontend**: React, React Router
    
*   **Backend**: Node.js, Express.js, MySQL, Sequelize ORM
    
*   **Authentication**: JWT-based authentication for secure access
    
*   **File Storage**: Cloudinary for image and audio storage
    

Features
--------

*   **User Authentication**: Registration, login, and JWT authentication for secure access
    
*   **Profile Management**: Separate profiles for users and therapists, including expertise and contact info
    
*   **Appointments**: Users can book and view appointment status; therapists can confirm appointments
    
*   **Journals**: Users can create, view, update, and delete personal journal entries
    
*   **Feedback**: Users can submit feedback, viewable by the support team
    
*   **Music Library**: Explore songs by category, add favorites, and play audio tracks
    

Project Setup
-------------

### Prerequisites

*   **Node.js** and **MySQL** installed
    
*   Cloudinary account for storing media files
    

### Installation Steps

1.  bashCopy codegit clone https://github.com/your-username/little-light.gitcd little-light
    
2.  **Backend Setup**:
    
    *   Navigate to the server directory: cd server
        
    *   Install dependencies: npm install
        
    *   plaintextCopy codePORT=5000JWT\_SECRET=your\_jwt\_secretDB\_HOST=localhostDB\_USER=rootDB\_PASSWORD=your\_db\_passwordDB\_NAME=littlelightCLOUDINARY\_CLOUD\_NAME=your\_cloud\_nameCLOUDINARY\_API\_KEY=your\_api\_keyCLOUDINARY\_API\_SECRET=your\_api\_secret
        
3.  **Database Setup**:
    
    *   Ensure a MySQL database named littlelight is created and configured in .env.
        
4.  **Frontend Setup**:
    
    *   Navigate to the client directory: cd ../client
        
    *   Install dependencies: npm install
        
5.  **Run the Application**:
    
    *   Start the backend: cd ../server && npm start
        
    *   Start the frontend: cd ../client && npm start
        

API Endpoints
-------------

### Auth

*   **POST** /api/v1/auth/register: Register a user or therapist
    
*   **POST** /api/v1/auth/login: Authenticate and receive a JWT token
    

### Profile

*   **GET** /api/v1/profiles/user: Fetch user profile
    
*   **PUT** /api/v1/profiles/user: Update user profile
    
*   **GET** /api/v1/profiles/therapist: Fetch therapist profile
    

### Booking

*   **POST** /api/v1/booking/create: Create a new booking
    
*   **PUT** /api/v1/booking/status/:id: Update booking status
    

### Journals

*   **POST** /api/v1/journals: Add a journal entry
    
*   **GET** /api/v1/journals: View user’s journals
    

### Music Library

*   **GET** /api/v1/category: View music categories
    
*   **POST** /api/v1/favourites: Add a song to favorites