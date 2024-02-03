# Simple To-Do List App

This is a simple To-Do list app built with Next.js and MySQL as the database.

## Features

-   Add new To-Do items
-   Mark To-Do items as completed
-   Delete To-Do items

## Technologies Used

-   Next.js: React framework for server-side rendering and building web applications.
-   MySQL: Relational database for storing and retrieving To-Do items.

## Getting Started

### Prerequisites

-   Node.js: Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
-   MySQL: Install and set up a MySQL database. Create a database and note down the connection details.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/PLMohamed/next-todolist.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory with the following content:

    ```env
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

    Replace `your_database_host`, `your_database_user`, `your_database_password`, and `your_database_name` with your actual MySQL database details.

5. Run this script to set up the database tables:

    ```bash
    npm run generate
    npm run migrate
    ```

6. Start the Next.js development server:

    ```bash
    npm run dev
    ```

7. Open your browser and visit [http://localhost:3000](http://localhost:3000) to use the To-Do list app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
