# WAPDEV - Web & Software Development

Modern React + Vite website for WAPDEV agency.

## Project Structure

- `src/components`: Reusable UI components
- `src/sections`: Page sections (Hero, Services, etc.)
- `src/assets`: Static assets
- `public`: Public assets (logo, favicon)

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Firebase Deployment

This project is configured for Firebase Hosting.

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize project (if not already done):
   ```bash
   firebase init hosting
   ```

4. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```
