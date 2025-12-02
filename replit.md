# WAPDEV - Web & Software Development

Modern portfolio website for WAPDEV agency built with React + Vite.

## Overview

A minimalist, modern portfolio website featuring:
- **Design**: Black (#000000), White (#FFFFFF), Purple (#7A5CF3) color palette
- **Typography**: Poppins font family
- **Sections**: Hero, Services, Process, Portfolio, Contact
- **Backend**: Express server with email contact form

## Recent Changes

- **2025-12-02**: Initial project setup with full-stack architecture
- **2025-12-02**: Added social media contact options (Instagram, WhatsApp, Messenger)
- **2025-12-02**: Implemented contact form with backend API

## Email Configuration

The contact form (`/api/contact`) currently logs submissions to the console. To enable actual email sending:

1. Choose an email provider:
   - **Gmail**: Easiest for testing (requires app-specific password)
   - **SMTP Provider**: SendGrid, Mailgun, or your hosting provider
   - **Replit Integration**: Resend connector (requires setup via integrations)

2. Set environment variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   ```

3. For Gmail app-specific password:
   - Enable 2FA on your Google account
   - Generate app password at: https://myaccount.google.com/apppasswords
   - Use that password (not your regular Gmail password)

## User Preferences

- Prefer minimal, geometric design
- Black background with purple accents
- Clean, professional aesthetic

## Project Architecture

### Frontend (Client)
- **Framework**: React 19 with Vite
- **Styling**: TailwindCSS v4 with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Shadcn/ui (Radix UI primitives)

### Backend (Server)
- **Framework**: Express
- **Email**: Nodemailer (configured for Gmail SMTP)
- **API Routes**: All prefixed with `/api`

### Deployment
- **Firebase Hosting**: Configured for static frontend (`firebase.json`)
- **Backend Options**: 
  - Replit Autoscale Deployment
  - Firebase Cloud Functions
  - Any Node.js hosting

## Social Media Links

Update these placeholders in `client/src/sections/Contact.tsx`:
- Instagram: `https://instagram.com/yourhandle`
- WhatsApp: `https://wa.me/1234567890` (replace with your number)
- Messenger: `https://m.me/yourpagename`
