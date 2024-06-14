# Weather App

## Description

Weather App is a simple application designed to experiment with writing automated tests on an app that uses Capacitor. The app allows users to enter their zip code and receive the weather forecast for their area by hitting a public API.

## Purpose

The primary purpose of this app is to provide a platform for experimenting with automated tests using Playwright and Jest. This includes setting up continuous integration to run tests automatically on commits to the `main` branch.

## Installation

To get started with the Weather App, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/dannysarco/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up your API key**:
   - Create a `.env.local` file in the root directory of the project.
   - Add your OpenWeatherMap API key to the `.env.local` file:
     ```env
     NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
     ```

## Running the App

To run the app locally, use the following command:

```sh
npm run dev
```

This will start the Next.js development server, and you can view the app in your browser at `http://localhost:3000`.

## Running Tests

### Playwright and Jest Setup

The project uses Playwright and Jest for automated testing. Follow these steps to run the tests:

1. **Ensure the development server is running**:
    ```sh
    npm run dev
    ```

2. **Run the tests with a delay**:
    ```sh
    npm run test:delay
    ```

3. **Run the tests after waiting for the server**:
    ```sh
    npm run test:wait
    ```

4. **Run the development server and tests concurrently**:
    ```sh
    npm run dev:test
    ```

### Continuous Integration

The project is configured to run tests automatically on commits to the `main` branch using GitHub Actions.

**GitHub Actions Workflow**:

The workflow file `.github/workflows/ci.yml` is set up to:

- Run on push events to the `main` branch.
- Set up the Node.js environment.
- Install dependencies.
- Run tests using Jest and Playwright.

To trigger the workflow, commit and push your changes to the `main` branch.

## Commands

- **Start the development server**:
    ```sh
    npm run dev
    ```

- **Build the project**:
    ```sh
    npm run build
    ```

- **Start the built project**:
    ```sh
    npm run start
    ```

- **Lint the project**:
    ```sh
    npm run lint
    ```

- **Run Jest tests**:
    ```sh
    npm run test:jest
    ```

- **Run tests with a delay**:
    ```sh
    npm run test:delay
    ```

- **Wait for the server to start and then run tests**:
    ```sh
    npm run test:wait
    ```

- **Run development server and tests concurrently**:
    ```sh
    npm run dev:test
    ```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License.