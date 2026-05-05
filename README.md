# Real Estate Project

A complete Real Estate website with property listings, search functionality, and enquiry system.

## Tech Stack

### Frontend
- React (functional components + hooks)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js + Express.js
- MySQL Database

## Project Structure

```
real-estate-app/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── schema.sql
│   ├── models/
│   │   ├── Property.js
│   │   └── Enquiry.js
│   ├── routes/
│   │   ├── propertyRoutes.js
│   │   └── enquiryRoutes.js
│   ├── controllers/
│   │   ├── propertyController.js
│   │   └── enquiryController.js
│   ├── package.json
│   ├── server.js
│   └── .env
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── PropertyCard.jsx
    │   │   ├── Filter.jsx
    │   │   └── Footer.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Properties.jsx
    │   │   ├── PropertyDetails.jsx
    │   │   └── Contact.jsx
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── package.json
    ├── tailwind.config.js
    └── postcss.config.js
```

## Setup Instructions

### Prerequisites
- Node.js installed
- MySQL Server installed and running

### Database Setup
1. Open MySQL and create the database:
   ```sql
   source backend/config/schema.sql
   ```
   Or manually run the SQL commands in `backend/config/schema.sql`

2. Update `backend/.env` with your MySQL credentials

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on http://localhost:5000

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on http://localhost:3000

## Features

### Home Page
- Hero section with search bar
- Featured properties
- Statistics section
- CTA section

### Properties Page
- Property listing grid
- Filters: Location, Price, Type, Bedrooms
- Responsive design

### Property Details Page
- Full property details
- Image display
- Enquiry form
- Property features

### Contact Page
- Contact form
- Office information
- Business hours

## API Endpoints

### Properties
- `GET /api/properties` - Get all properties (with filters)
- `GET /api/properties/featured` - Get featured properties
- `GET /api/properties/:id` - Get single property details

### Enquiries
- `POST /api/enquiries` - Submit enquiry

## Theme Colors
- Primary: Dark Blue (#0A1F44)
- Accent: Gold (#C9A227)
