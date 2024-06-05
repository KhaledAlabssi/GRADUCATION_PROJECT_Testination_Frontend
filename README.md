## Graduation Project Testination Frontend

This is the frontend repository for the Graduation Project Testination. 

### Features

- **Group Management:** Create and manage groups.
- **Test Management:** Create, evaluate, and grade tests.
- **User Profiles:** Manage teacher and participant profiles.
- **User Authentication:** Login and logout functionalities.
- **Email Notifications:** Receive notifications for new tests.

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/KhaledAlabssi/graduation-project-frontend.git
    cd graduation-project-frontend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create a `.env` file**
    ```bash
    touch .env
    ```

4. **Configure your environment variables in `.env`**
    ```
    REACT_APP_API_URL=http://localhost:3000
    ```

5. **Run the application**
    ```bash
    npm start
    ```

### Available Scripts

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `build` folder.

### Folder Structure

- **src**
    - **components**: Reusable components
    - **pages**: Page components
    - **services**: API service calls
    - **styles**: CSS and styling
    - **App.js**: Main app component
    - **index.js**: Main entry point

