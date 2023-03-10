# Documentation for "Newsletter" website

## Description

The website allows users to sign up for a newsletter using a simple form, and stores the user's email address in a MongoDB database.

## Usage

To use the website, simply navigate to the homepage (e.g., [http://localhost:3000/](http://localhost:3000/)) in your web browser. From there, you can sign up for the newsletter by entering your email address in the form provided and clicking the "Subscribe" button.

Once you submit the form, the website will store your email address in a MongoDB database and redirect you to the homepage. If the signup was successful, you will see an alert indicating that you have successfully subscribed to the newsletter.

## Technologies

The website was built using the following technologies:

-   HTML
-   CSS
-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   cors

## Installation

To run the website locally, follow these steps:

1.  Install Node.js and MongoDB on your local machine.
2.  Clone the repository to your local machine using the command: `git clone <repository-url>`
3.  Navigate to the root directory of the repository and run the command `npm install` to install the required dependencies.
4.  Start the MongoDB server by running the command `mongod`.
5.  Start the Node.js server by running the command `npm start`.
6.  Navigate to [http://localhost:3000/](http://localhost:3000/) in your web browser to access the website.

## API

The website provides a single API endpoint for signing up for the newsletter:

-   **POST /newsletter-signup**: This endpoint accepts a JSON object containing the user's email address, and stores it in a MongoDB database. The endpoint returns a 200 OK status code if the signup was successful, or a 500 Internal Server Error status code if there was an error.

## Contributors

The website was created by Dietrich Fernandez. Contributions are welcome!