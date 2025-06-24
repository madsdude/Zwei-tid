# Login Page Application

This project is a simple login page application that uses an SQL database and runs in a Docker container. It is built using Node.js and Express, with Sequelize for database interaction.

## Project Structure

```
login-page-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── auth.js           # Authentication routes
│   ├── controllers
│   │   └── authController.js  # Controller for authentication logic
│   ├── models
│   │   └── user.js           # User model for database interaction
│   └── config
│       └── db.js             # Database connection configuration
├── Dockerfile                 # Dockerfile for building the application image
├── docker-compose.yml         # Docker Compose configuration for services
├── package.json               # npm configuration file
├── .env                       # Environment variables for the application
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd login-page-app
   ```

2. **Create a `.env` file:**
   Copy the `.env.example` to `.env` and fill in your database connection details.

3. **Build and run the application using Docker:**
   ```
   docker-compose up --build
   ```

4. **Access the application:**
   Open your browser and go to `http://localhost:3000` to access the login page.

## Usage

- **Register a new user:** Navigate to the registration route and fill in the required details.
- **Login:** Use the login form to authenticate with your credentials.

## Technologies Used

- Node.js
- Express
- Sequelize
- Docker
- SQL Database (e.g., MySQL, PostgreSQL)

## License

This project is licensed under the MIT License.