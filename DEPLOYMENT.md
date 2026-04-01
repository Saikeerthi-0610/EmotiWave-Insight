# 🚀 Deployment Guide for EmotiWave Insight

## Deploying to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `Saikeerthi-0610/EmotiWave-Insight`

2. **Configure Project Settings**
   
   In the project configuration screen:
   
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend` ⚠️ **IMPORTANT**
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

3. **Environment Variables**
   
   Add the following environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   ```
   
   (You'll need to deploy your backend first - see Backend Deployment section)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to your project
cd EmotiWave-Insight

# Login to Vercel
vercel login

# Deploy
vercel --prod

# When prompted:
# - Set root directory to: frontend
# - Confirm other settings
```

---

## Backend Deployment Options

### Option 1: Deploy to Render.com (Free Tier Available)

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: emotiwave-backend
     - **Root Directory**: `backend`
     - **Environment**: Node
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`

3. **Environment Variables**
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_secret_key
   NODE_ENV=production
   ```

4. **MongoDB Setup**
   - Use MongoDB Atlas (free tier)
   - Get connection string
   - Add to environment variables

### Option 2: Deploy to Railway.app

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Set root directory: `backend`
   - Add environment variables (same as above)

4. **Deploy**
   - Railway will auto-deploy
   - Get your backend URL

### Option 3: Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create emotiwave-backend

# Set buildpack
heroku buildpacks:set heroku/nodejs

# Set environment variables
heroku config:set MONGODB_URI=your_connection_string
heroku config:set JWT_SECRET=your_secret

# Deploy
git subtree push --prefix backend heroku main
```

---

## MongoDB Atlas Setup (Free)

1. **Create Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free

2. **Create Cluster**
   - Choose "Shared" (Free tier)
   - Select region closest to your users
   - Click "Create Cluster"

3. **Database Access**
   - Go to "Database Access"
   - Add new database user
   - Save username and password

4. **Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `neuro_brain_scan`

   Example:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/neuro_brain_scan?retryWrites=true&w=majority
   ```

---

## Complete Deployment Checklist

### ✅ Before Deployment

- [ ] Backend code is working locally
- [ ] Frontend code is working locally
- [ ] MongoDB Atlas cluster is created
- [ ] Environment variables are documented

### ✅ Backend Deployment

- [ ] Deploy backend to Render/Railway/Heroku
- [ ] Add MongoDB connection string
- [ ] Add JWT secret
- [ ] Test backend API endpoints
- [ ] Note down backend URL

### ✅ Frontend Deployment

- [ ] Update `NEXT_PUBLIC_API_URL` in Vercel
- [ ] Set root directory to `frontend`
- [ ] Deploy to Vercel
- [ ] Test frontend functionality
- [ ] Verify API calls work

### ✅ Post-Deployment

- [ ] Test login/register functionality
- [ ] Test EEG data upload
- [ ] Test PDF generation
- [ ] Test all user roles (Doctor, Patient, Admin)
- [ ] Check MongoDB data is being saved
- [ ] Update README with live URLs

---

## Troubleshooting

### Issue: 404 Not Found on Vercel

**Solution**: Make sure you set the **Root Directory** to `frontend` in Vercel project settings.

1. Go to Project Settings → General
2. Find "Root Directory"
3. Set to: `frontend`
4. Redeploy

### Issue: API Calls Failing

**Solution**: Check environment variables

1. Verify `NEXT_PUBLIC_API_URL` is set in Vercel
2. Make sure backend is deployed and running
3. Check CORS settings in backend
4. Verify MongoDB connection

### Issue: Build Fails

**Solution**: Check dependencies

```bash
# Test build locally first
cd frontend
npm install
npm run build

# If successful, commit and push
git add .
git commit -m "Fix build issues"
git push
```

### Issue: MongoDB Connection Error

**Solution**: 
1. Check MongoDB Atlas IP whitelist
2. Verify connection string format
3. Ensure database user has correct permissions
4. Check if cluster is active

---

## Environment Variables Reference

### Frontend (.env)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/neuro_brain_scan
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

---

## Quick Deploy Commands

```bash
# 1. Commit all changes
git add .
git commit -m "Prepare for deployment"
git push origin main

# 2. Deploy frontend to Vercel
cd frontend
vercel --prod

# 3. Deploy backend (example with Render)
# Use Render dashboard or CLI

# 4. Update environment variables in both platforms
```

---

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check backend logs (Render/Railway/Heroku)
3. Verify all environment variables
4. Test API endpoints directly
5. Check MongoDB Atlas metrics

---

## Production URLs

After deployment, update these in your README:

- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-backend.onrender.com`
- **MongoDB**: `MongoDB Atlas Cluster`

---

**Good luck with your deployment! 🚀**
