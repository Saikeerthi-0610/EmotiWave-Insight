# MongoDB Setup Guide

## Connecting to MongoDB Compass

1. Open MongoDB Compass
2. Use this connection string:
   ```
   mongodb://localhost:27017/neuro_brain_scan
   ```
3. Click "Connect"

## Database Structure

### Database Name
`neuro_brain_scan`

### Collections

#### 1. patients
Stores patient information:
- `_id`: ObjectId (auto-generated)
- `name`: String (required)
- `age`: Number (optional)
- `gender`: String (male/female/other)
- `email`: String (unique, optional)
- `createdAt`: Date
- `updatedAt`: Date

#### 2. eegscans
Stores EEG scan data:
- `_id`: ObjectId (auto-generated)
- `patientId`: ObjectId (reference to patients)
- `patientName`: String
- `readings`: Array of objects
  - `index`: Number
  - `alpha`: Number
  - `beta`: Number
  - `gamma`: Number
  - `theta`: Number
  - `timestamp`: Date
- `brainState`: String (Relaxed/Focused/Neutral)
- `averages`: Object
  - `alpha`: Number
  - `beta`: Number
  - `gamma`: Number
  - `theta`: Number
- `fileName`: String (optional)
- `notes`: String (optional)
- `createdAt`: Date
- `updatedAt`: Date

## Seeding Sample Data

To populate the database with sample data:

```bash
cd backend
npm run seed
```

This will create:
- 2 sample patients (John Doe, Jane Smith)
- 2 sample EEG scans with readings

## Clearing Data

To clear all data and reseed:

```bash
npm run seed
```

The seed script automatically clears existing data before inserting new records.

## Viewing Data via API

### Get all patients
```bash
curl http://localhost:5000/api/patients
```

### Get all scans
```bash
curl http://localhost:5000/api/scans
```

### Get scans for a specific patient
```bash
curl http://localhost:5000/api/scans/patient/{patientId}
```

## Troubleshooting

### Database not showing in Compass
- Make sure MongoDB service is running
- Run `npm run seed` to create initial data
- Refresh the connection in Compass

### Connection refused
- Check if MongoDB service is running:
  ```powershell
  Get-Service -Name MongoDB
  ```
- Start MongoDB if it's stopped:
  ```powershell
  Start-Service -Name MongoDB
  ```
