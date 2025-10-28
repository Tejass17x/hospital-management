# HM Care - Hospital Management (React + TS + Tailwind)

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the dev server
```bash
npm run dev
```

## Tech Stack
- React + TypeScript (Vite)
- Tailwind CSS
- React Router

## Pages
- Home, Patients, Doctors, Appointments, About, Contact, Admin
- Payment: mock flow; ready for Stripe integration

## Stripe Integration (Ready)
- Frontend has a placeholder payment page. To integrate Stripe:
  - Create a backend endpoint to create PaymentIntent and return client_secret
  - On Payment page, load Stripe.js with your publishable key and confirm card payment

## Styling
- Tailwind configured in `tailwind.config.js`
- Global styles in `src/index.css`

## Scripts
- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
