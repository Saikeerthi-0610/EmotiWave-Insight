# 🧠 EmotiWave Insight

<div align="center">

![EmotiWave Insight](https://img.shields.io/badge/EmotiWave-Insight-3B6F8E?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=for-the-badge&logo=mongodb)
![AI Powered](https://img.shields.io/badge/AI-Powered-56B79A?style=for-the-badge)

**Advanced EEG Analysis Platform for Emotion Detection & Brain Wave Monitoring**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

EmotiWave Insight is a cutting-edge web application that analyzes EEG (Electroencephalography) brain wave data to detect emotional states using advanced AI algorithms. Built with a hybrid BiGRU + BiLSTM deep learning model achieving **98.59% accuracy**, this platform empowers healthcare professionals to monitor, analyze, and understand patient brain activity in real-time.

### 🎯 What Makes It Special?

- **AI-Powered Emotion Detection**: Classifies emotions into Positive, Negative, and Neutral states
- **Real-Time Monitoring**: Live EEG data visualization with interactive charts
- **Multi-Patient Support**: Analyze multiple patients simultaneously from CSV uploads
- **Role-Based Access**: Separate interfaces for Doctors, Patients, and Administrators
- **Comprehensive Reports**: Generate patient-friendly PDF reports with analysis results
- **Professional Dashboard**: Track patient history, scan results, and emotional trends

---

## ✨ Features

### 🔬 For Healthcare Professionals

- **Patient Dashboard**: View all patients with their emotional states and scan history
- **Live Monitoring**: Real-time EEG signal visualization with frequency band analysis
- **Batch Analysis**: Upload CSV files to analyze multiple patients at once
- **Detailed Reports**: Access comprehensive analysis with brain wave breakdowns
- **Patient History**: Track emotional trends and previous scan results

### 👤 For Patients

- **Personal Reports**: View your own EEG analysis reports
- **Easy Understanding**: Patient-friendly explanations of brain wave data
- **PDF Downloads**: Download detailed reports for personal records
- **Secure Access**: Role-based authentication ensures data privacy

### 👨‍💼 For Administrators

- **System Overview**: Monitor total users, active sessions, and system health
- **Analytics Dashboard**: View system-wide statistics and usage patterns
- **User Management**: Manage doctor and patient accounts
- **System Health**: Real-time monitoring of API, Database, AI Model, and Storage

---

## 🎬 Demo

### Main Landing Page
Clean, professional interface with easy navigation to analysis tools

### Doctor Dashboard
![Dashboard Preview](https://img.shields.io/badge/View-Patient_Dashboard-3B6F8E?style=flat-square)
- Patient cards with emotion indicators
- Search and filter functionality
- Quick access to patient details

### EEG Monitor
![Monitor Preview](https://img.shields.io/badge/View-Live_Monitor-56B79A?style=flat-square)
- Real-time waveform visualization
- Frequency band analysis (Alpha, Beta, Gamma, Theta)
- Emotion classification results

### Analysis Reports
![Reports Preview](https://img.shields.io/badge/View-Analysis_Reports-3B6F8E?style=flat-square)
- Comprehensive brain wave analysis
- Downloadable PDF reports
- Historical data tracking

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **MongoDB** (v7.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/Saikeerthi-0610/EmotiWave-Insight.git
cd EmotiWave-Insight
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB connection string
# MONGODB_URI=mongodb://localhost:27017/neuro_brain_scan
# PORT=5000

# Start the backend server
npm run dev
```

The backend will run on **http://localhost:5000**

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on **http://localhost:3000**

### Step 4: MongoDB Setup

1. Install MongoDB Compass (GUI) or use MongoDB CLI
2. Create a database named `neuro_brain_scan`
3. The application will automatically create collections on first run

---

## 📊 Usage

### For Doctors

1. **Login**: Navigate to `/access` and login with doctor credentials
2. **Dashboard**: View all patients at `/dashboard`
3. **Monitor Patient**: Go to `/monitor` to upload EEG CSV data
4. **Analyze**: Upload CSV file with columns: `person`, `alpha`, `beta`, `gamma`, `theta`
5. **View Results**: Check patient details and download reports

### For Patients

1. **Login**: Navigate to `/access` and login with patient credentials
2. **View Reports**: Access your analysis reports at `/patient-reports`
3. **Download**: Download PDF reports for your records

### For Administrators

1. **Login**: Navigate to `/access` and login with admin credentials
2. **Admin Panel**: Access system overview at `/admin`
3. **Monitor**: Check system health and user statistics

### CSV Format for EEG Data

```csv
person,alpha,beta,gamma,theta
Patient1,45.2,32.1,18.5,28.9
Patient2,38.7,29.4,22.1,31.2
Patient3,42.5,35.8,19.7,27.4
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.7 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **PDF Generation**: jsPDF + html2canvas
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful API architecture

### AI/ML Model
- **Architecture**: Hybrid BiGRU + BiLSTM
- **Accuracy**: 98.59%
- **Classification**: 3-class emotion detection (Positive, Negative, Neutral)
- **Features**: Alpha, Beta, Gamma, Theta frequency bands

---

## 🎨 Color Scheme

The application uses a professional medical-grade color palette:

- **Primary Blue**: `#3B6F8E` - Trust and professionalism
- **Primary Teal**: `#56B79A` - Calm and healing
- **Background**: `#F4F7F9` - Clean and modern
- **Border**: `#D6E0E7` - Subtle separation

---

## 📁 Project Structure

```
EmotiWave-Insight/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app router pages
│   │   │   ├── access/      # Login/Register page
│   │   │   ├── admin/       # Admin dashboard
│   │   │   ├── dashboard/   # Doctor dashboard
│   │   │   ├── monitor/     # EEG monitoring
│   │   │   ├── analysis/    # Analysis page
│   │   │   └── patient-*/   # Patient pages
│   │   ├── components/      # Reusable React components
│   │   ├── contexts/        # React context providers
│   │   ├── services/        # API service functions
│   │   ├── types/           # TypeScript type definitions
│   │   ├── utils/           # Utility functions
│   │   └── styles/          # Global styles
│   └── public/              # Static assets
│
├── backend/                  # Express.js backend
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   └── utils/           # Utility functions
│   └── uploads/             # File upload directory
│
└── ai-model/                 # AI/ML model files
    ├── model.py             # BiGRU + BiLSTM model
    ├── preprocess.py        # Data preprocessing
    └── api.py               # Model API endpoint
```

---

## 🔐 Authentication & Roles

### User Roles

1. **Doctor**
   - Full access to patient data
   - Can monitor and analyze EEG data
   - Access to dashboard and reports

2. **Patient**
   - View own reports only
   - Download personal analysis
   - Limited read-only access

3. **Admin**
   - System-wide access
   - User management
   - System health monitoring

### Default Credentials (Development)

```
Doctor:
Email: doctor@example.com
Password: doctor123

Patient:
Email: patient@example.com
Password: patient123

Admin:
Email: admin@example.com
Password: admin123
```

---

## 🧪 Emotion Classification Algorithm

The emotion detection uses a weighted formula based on EEG frequency bands:

```
Positive Score = (alpha × 0.4) + (theta × 0.3) - (beta × 0.2) + (gamma × 0.1)
```

**Classification Rules:**
- **Positive**: Score > 5
- **Negative**: Score < -5
- **Neutral**: -5 ≤ Score ≤ 5

**Dominant Wave**: The frequency band with the highest value

---

## 📱 API Endpoints

### Authentication
- `POST /api/auth/authenticate` - Login/Register user

### Patients
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Scans
- `GET /api/scans` - Get all scans
- `GET /api/scans/patient/:patientId` - Get scans by patient
- `POST /api/scans` - Create new scan
- `POST /api/scans/analyze` - Analyze EEG data

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write clean, documented code
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

**Sai Keerthi**
- GitHub: [@Saikeerthi-0610](https://github.com/Saikeerthi-0610)
- Repository: [EmotiWave-Insight](https://github.com/Saikeerthi-0610/EmotiWave-Insight)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the robust database solution
- Recharts for beautiful data visualizations
- Framer Motion for smooth animations
- The open-source community for inspiration

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Saikeerthi-0610/EmotiWave-Insight/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

## 🔮 Future Enhancements

- [ ] Real-time WebSocket integration for live EEG streaming
- [ ] Mobile application (React Native)
- [ ] Advanced ML models with transfer learning
- [ ] Multi-language support
- [ ] Cloud deployment with AWS/Azure
- [ ] Integration with EEG hardware devices
- [ ] Advanced analytics and predictive insights
- [ ] Telemedicine video consultation integration

---

<div align="center">

**Made with ❤️ for Healthcare Professionals**

⭐ Star this repository if you find it helpful!

[Report Bug](https://github.com/Saikeerthi-0610/EmotiWave-Insight/issues) • [Request Feature](https://github.com/Saikeerthi-0610/EmotiWave-Insight/issues)

</div>
