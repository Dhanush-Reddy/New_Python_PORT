# Modern Portfolio - K Dhanush

A modern, responsive portfolio website for K Dhanush, a Python Backend Engineer with 3.7+ years of experience.

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form integration
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **Uvicorn** - ASGI server

## 📦 Project Structure

```
modern-portfolio/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── sections/     # Page sections
│   │   ├── data/         # Portfolio content
│   │   └── ...
│   └── ...
└── backend/           # FastAPI backend (optional)
    └── ...
```

## 🛠️ Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Backend (Optional)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## 🌐 Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the `New_Python_PORT` repository
4. Netlify will auto-detect the settings from `netlify.toml`
5. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🔐 Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Never commit the `.env` file to Git. It's already in `.gitignore`.

## ✨ Features

- 🎨 Modern, minimal design with glassmorphism effects
- 🌓 Dark mode support
- 📱 Fully responsive
- ✉️ Working contact form with EmailJS
- 🎭 Smooth animations with Framer Motion
- 🚀 Fast performance with Vite
- 📊 Project modals with detailed information
- 🎯 SEO optimized

## 📝 Customization

Edit the content in `frontend/src/data/content.js` to update:
- Personal information
- Skills and tech stack
- Work experience
- Projects
- Social links

## 📄 License

MIT License - feel free to use this template for your own portfolio!
