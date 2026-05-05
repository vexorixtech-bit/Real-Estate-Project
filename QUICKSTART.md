# Quick Start Guide

## Step 1: Database Setup
1. Open MySQL command line or workbench
2. Run the following:
```sql
CREATE DATABASE IF NOT EXISTS real_estate;
USE real_estate;

SOURCE D:/Projects 2026/real estate industries/real-estate-app/backend/config/schema.sql
```
Or copy-paste the SQL from `backend/config/schema.sql`

## Step 2: Configure Backend
Edit `backend/.env` with your MySQL credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=real_estate
PORT=5000
```

## Step 3: Start Backend
```bash
cd backend
npm install
npm start
```
Backend will run on http://localhost:5000

## Step 4: Start Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
Frontend will run on http://localhost:3000

## Verify Installation
1. Visit http://localhost:3000 - You should see the homepage
2. Visit http://localhost:5000 - You should see "Real Estate API is running..."

## Sample Data
The database schema includes 6 sample properties to demonstrate the website.

## Features Implemented
✅ Fully responsive design
✅ Hero section with search
✅ Property listings with filters
✅ Property details with enquiry form
✅ Contact page
✅ Dark blue + Gold theme
✅ Loading states
✅ Error handling
✅ MySQL database integration
✅ REST API endpoints
