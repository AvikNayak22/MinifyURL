# MinifyURL

MinifyURL is a URL-shortening application that transforms long URLs into concise links for easier sharing. It simplifies the process of sharing URLs, ideal for social media, email campaigns, and personal use.

## Features

- Convert long URLs into short, easy-to-share links.
- View statistics such as the number of clicks for each shortened URL.
- Delete unwanted shortened URLs.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Tailwind CSS
- **Database**: MongoDB
- **Deployment**: Render (backend), Vercel (frontend)

## Setup

1. Clone the repository:
   
   ```
   git clone https://github.com/AvikNayak22/MinifyURL.git
   ```
2. Install dependencies for both the frontend and backend:

   ```
   cd client/url-shortener-app
   npm install
   
   cd ../server
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `server` directory and define `MONGODB_URL` for MongoDB connection. Also, define `PORT` in the `.env` file.
   - Similarly create a `.env` in the `client` directory and define `VITE_SERVER_URL` for connecting to the deployed server.
4. Start the development server:
   - For the frontend: Run `npm run dev` in the `client/url-shortener-app` directory.
   - For the backend:
      -  Move to the `server` directory.
      -  Add `"dev": "npx tsc && nodemon ./dist/server.js"` in `scripts` of the `package.json` file.
      -  Now run `npm run dev` to start the server.
        
## API Endpoints

- `POST /api/shortUrl`: Create a new shortened URL.
- `GET /api/shortUrl`: Get all shortened URLs.
- `GET /api/shortUrl/:id`: Get details of a specific shortened URL.
- `POST /api/shortUrl/:id`: Delete a shortened URL.

## Further Improvements

- **Authentication and User Management**: Implement user authentication to allow users to manage their shortened URLs.
- **Custom Short URLs**: Allow users to customize their short URLs.
- **Expiration for Short URLs**: Implement functionality to automatically expire short URLs after a certain period.

## Contributors
- Avik Nayak (@AvikNayak22)
