# Neuro Brain Scan - Setup Guide

## Running Servers

### Frontend (Port 3000)
```bash
cd frontend
npm run dev
```
Access at: http://localhost:3000

### Backend (Port 5000)
```bash
cd backend
npm run dev
```
Access at: http://localhost:5000

## MongoDB
Make sure MongoDB is running on localhost:27017

## API Endpoints

### Upload EEG Data
- POST http://localhost:5000/api/upload
- Body: FormData with 'file' field (CSV)

### Patients
- GET http://localhost:5000/api/patients
- GET http://localhost:5000/api/patients/:id
- POST http://localhost:5000/api/patients
- PUT http://localhost:5000/api/patients/:id
- DELETE http://localhost:5000/api/patients/:id

### Scans
- GET http://localhost:5000/api/scans
- GET http://localhost:5000/api/scans/:id
- GET http://localhost:5000/api/scans/patient/:patientId
- DELETE http://localhost:5000/api/scans/:id

### Health Check
- GET http://localhost:5000/api/health

## CSV Format
Your CSV should have these columns:
- person (or Person)
- alpha (or Alpha)
- beta (or Beta)
- gamma (or Gamma)
- theta (or Theta)

## Troubleshooting

### CORS Issues
The backend is configured to accept requests from localhost:3000 and localhost:5000

### MongoDB Connection
Check if MongoDB service is running:
```bash
Get-Service -Name MongoDB
```

### Clear Cache
If frontend has issues, clear the build cache:
```bash
cd frontend
Remove-Item -Recurse -Force .next
npm run dev
```
