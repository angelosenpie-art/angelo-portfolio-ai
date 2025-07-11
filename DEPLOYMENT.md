# Angelo Portfolio Website - Deployment Guide

## GitHub Setup

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Repository name: `angelo-portfolio-ai`
4. Description: `AI-powered portfolio website built with React, TypeScript, and Google Gemini AI`
5. Make it **Public**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Add Hostinger SSH Key to GitHub
1. **Copy the SSH key** that Hostinger provided you
2. Go to **GitHub.com** → **Settings** → **SSH and GPG keys**
3. Click **"New SSH key"**
4. **Title**: `Hostinger Deploy Key`
5. **Key**: Paste the SSH key from Hostinger
6. Click **"Add SSH key"**

### Step 3: Push to GitHub
After creating the repository, run these commands in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/angelo-portfolio-ai.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Building for Production

### Step 3: Build the Project
```bash
npm run build
```

This creates a `dist` folder with the production-ready files.

## Hostinger Deployment

### Option A: Git Integration (Recommended) 🚀

#### Step 4: Set up Git Deployment
1. Log in to your **Hostinger control panel**
2. Go to **Advanced** → **Git**
3. Click **Create Repository**
4. Fill in the details:
   - **Repository URL**: `git@github.com:YOUR_USERNAME/angelo-portfolio-ai.git` (SSH format)
   - **Branch**: `main`
   - **Repository path**: `  (or your domain folder)
5. **Copy the SSH key** that Hostinger shows you
6. **Add this SSH key to GitHub** (see Step 2 above)
7. Click **Create**

#### Step 5: Configure Build Process
In Hostinger Git settings:
1. **Build Command**: `npm install && npm run build`
2. **Output Directory**: `dist`
3. **Node.js Version**: Select latest (18.x or 20.x)

#### Step 6: Set Environment Variables in Hostinger
1. In Hostinger control panel, go to **Advanced** → **Environment Variables**
2. Add your production variables:
   ```
   VITE_GEMINI_API_KEY=your_real_gemini_key
   VITE_EMAILJS_SERVICE_ID=your_real_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_real_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_real_public_key
   ```

#### Step 7: Deploy
1. Click **Deploy** in the Git section
2. Hostinger will automatically:
   - Pull your code from GitHub
   - Run `npm install`
   - Run `npm run build`
   - Deploy the `dist` folder to your domain

### Option B: Manual Upload (Alternative)

#### Step 4: Prepare for Manual Upload
1. **Set up environment variables locally** in `.env.production`
2. **Build locally**: `npm run build`
3. **ZIP the contents**: Compress all files inside the `dist` folder

#### Step 5: Upload to Hostinger
1. Log in to your Hostinger control panel
2. Go to **File Manager**
3. Navigate to your domain's `public_html` folder
4. Upload and extract the ZIP file contents

### Step 6: Environment Variables for Production
Create a `.env.production` file in your project root with:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Important**: For Hostinger deployment, you'll need to:
1. Build the project locally with your production environment variables
2. Upload the pre-built files to Hostinger

### Step 7: Domain Configuration
1. In Hostinger, make sure your domain points to the `public_html` folder
2. Enable SSL certificate for HTTPS
3. Test the website at your domain: `https://angelosinday.me`

## Alternative: Automated Deployment with GitHub Pages

If you want automatic deployments, you can also deploy to GitHub Pages:

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. GitHub will automatically build and deploy your site

## Troubleshooting

### Common Issues:
1. **Environment Variables**: Make sure all API keys are properly set
2. **Build Errors**: Run `npm run build` locally first to check for errors
3. **File Permissions**: Ensure uploaded files have correct permissions on Hostinger
4. **Domain Not Working**: Check DNS settings and SSL certificate

### Testing Locally:
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build locally
```

## File Structure After Deployment
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [other static files]
```

## Security Notes
- Never commit API keys to GitHub
- Use environment variables for all sensitive data
- Enable HTTPS on your domain
- Regularly update dependencies for security patches