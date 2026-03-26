# Neuro Brain Scan Backend

MongoDB-based backend for EEG brain scan data management.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running locally or update `.env` with your MongoDB URI

3. Start the server:
```bash
npm run dev
```

## API Endpoints

### Upload
- `POST /api/upload` - Upload CSV file with EEG data

### Patients
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Scans
- `GET /api/scans` - Get all scans
- `GET /api/scans/:id` - Get scan by ID
- `GET /api/scans/patient/:patientId` - Get all scans for a patient
- `DELETE /api/scans/:id` - Delete scan

### Health
- `GET /api/health` - Check server status

## Environment Variables

Create a `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/neuro_brain_scan
PORT=5000
AI_MODEL_URL=http://localhost:8000
```
