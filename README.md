# KeepMeOut Website

This is the official website for the KeepMeOut application, a tool designed to help you focus and avoid distractions. This project is built with Next.js and Tailwind CSS, and is deployed to GitHub Pages.

## Development

To get started with development, you'll need to have Node.js and npm installed. Then, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/KeepMeOut/KeepMeOut.github.io.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

This will start the development server at `http://localhost:3000`.

## Deployment

The website is automatically deployed to GitHub Pages whenever a commit is pushed to the `master` branch. The deployment process is handled by a GitHub Actions workflow defined in the `.github/workflows/deploy.yml` file.

## Testing

This project uses Jest and React Testing Library for testing. To run the tests, use the following command:

```bash
npm test
```