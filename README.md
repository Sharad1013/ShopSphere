# E-Commerce Platform

This is a fully-featured E-Commerce platform built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. The platform supports both Admin and User functionalities, including product management, cart and checkout, PayPal integration, filtering options, and more.

## Features

### User Features
- **Authentication**: Users can sign up or sign in.
- **Product Shopping**: Users can browse, filter, and search for products by categories (e.g., Men, Women, Accessories) or brands (e.g., Nike, Zara, H&M).
- **Cart**: Users can add products to their cart and view their selected items.
- **Checkout & Payment**: Users can proceed to checkout and make payments using PayPal.
- **Order Management**: Users can view order status updates (e.g., confirmed, in-process, pending, rejected) in their account page.
- **Address Management**: Users can add multiple addresses.
- **Reviews and Feedback**: Users can provide reviews and feedback for products they’ve purchased.

### Admin Features
- **Product Management**: Admins can add, update, or delete products available for shopping.
- **Order Management**: Admins can update the status of user orders, such as confirmed, in-process, pending, or rejected.

## Tech Stack

### Frontend
- **React**: Used for building user interfaces.
- **Redux Toolkit**: For state management.
- **ShadCN**: UI components.
- **Tailwind CSS**: For styling and responsive design.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.

### Backend
- **Node.js & Express.js**: For backend API development.
- **MongoDB**: For storing user, product, and order data.
- **Cloudinary**: For image storage.
- **PayPal SDK**: For payment processing.

### Backend Dependencies
- **bcryptjs**: For password hashing.
- **cloudinary**: For handling media uploads.
- **cookie-parser**: For managing cookies.
- **cors**: To enable CORS for API.
- **dotenv**: For managing environment variables.
- **express**: Web application framework.
- **jsonwebtoken**: For handling JWT-based authentication.
- **mongoose**: For MongoDB object modeling.
- **multer**: For handling file uploads.
- **nodemon**: For auto-reloading during development.

### Frontend Dependencies
- **react**: Core library for building user interfaces.
- **react-dom**: For DOM manipulation.
- **react-redux**: Integration of Redux in React.
- **react-router-dom**: For handling routing.
- **tailwind-merge**: For merging Tailwind CSS classes.
- **tailwindcss-animate**: For adding animations to Tailwind CSS.
- **@reduxjs/toolkit**: Simplifies Redux usage.
- **axios**: For HTTP requests.

## Installation

### Prerequisites
- Node.js
- MongoDB
- A PayPal developer account

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Sharad1013/ShopSphere.git

2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install

3. Create a .env file in the backend directory and add the following environment variables:
  ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    PAYPAL_CLIENT_ID=your_paypal_client_id
    PAYPAL_SECRET=your_paypal_secret
  ```

4. Start the backend server:
   ```bash
   npm run dev

## Frontend Setup

1. Navigate to the frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install

2. Create a .env file in the frontend directory and add the following environment variables:
   ```bash
   REACT_APP_API_URL=localhost origin
   REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id

3. Start the frontend development server:
  ```bash
   npm run dev
  ```

## Contact
For any inquiries, please reach out at sharadsinha8789@gmail.com.


