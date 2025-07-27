# 🏦 ICAP Banking Platform Workspace

## 📁 Project Structure

This workspace contains two main projects:

```
icap-project/
├── 📁 icap-strapi/                    # Backend (Strapi CMS)
│   ├── 📁 config/                     # Strapi configuration
│   ├── 📁 src/                        # Backend source code
│   ├── 📁 database/                   # Database files
│   └── 📄 strapi-api-service.js      # API service for frontend
│
├── 📁 icap-website-ICAP_FIREBASE/     # Frontend (React + Vite)
│   ├── 📁 src/                        # React source code
│   ├── 📁 components/                 # React components
│   └── 📁 pages/                      # React pages
│
└── 📄 icap-platform.code-workspace    # VS Code workspace file
```

## 🚀 Quick Start

### 1. Start the Backend (Strapi)
```bash
cd icap-strapi
npm run develop
```
- **Admin Panel**: http://localhost:1337/admin
- **API**: http://localhost:1337/api

### 2. Start the Frontend (React)
```bash
cd icap-website-ICAP_FIREBASE
npm run dev
```
- **Website**: http://localhost:5174/ (or similar port)

## 🔧 Development Workflow

### Running Both Projects
You need **two terminal windows**:

**Terminal 1 (Backend):**
```bash
cd icap-strapi
npm run develop
```

**Terminal 2 (Frontend):**
```bash
cd icap-website-ICAP_FIREBASE
npm run dev
```

### Workspace Navigation
- **VS Code**: Open `icap-platform.code-workspace` to work on both projects
- **Terminal**: Use `cd` to navigate between folders
- **File Changes**: Both projects sync automatically

## 📚 Documentation

### Security & Architecture
- `ARCHITECTURE_DIAGRAM.md` - Network and security architecture
- `SECURITY_ASSESSMENT.md` - Security measures and compliance
- `CYBERSECURITY_COMPLIANCE.md` - Banking-grade security standards
- `INTEGRATION_GUIDE.md` - How to connect frontend and backend

### Setup & Context
- `WORKSPACE_SETUP_CONTEXT.md` - Current workspace state
- `strapi-api-service.js` - API service for React frontend

## 🔐 Security Features

✅ **HTTPS enforced** for all traffic  
✅ **Strong authentication** for admin panel  
✅ **CORS restrictions** for API security  
✅ **Daily backups** of database and uploads  
✅ **Banking-grade compliance** (PCI DSS, SOX, ISO 27001)  

## 🛠️ Available Scripts

### Strapi Backend (`icap-strapi/`)
```bash
npm run develop    # Start development server
npm run start      # Start production server
npm run build      # Build admin panel
```

### React Frontend (`icap-website-ICAP_FIREBASE/`)
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run code linting
```

## 🌐 Access Points

### Development
- **Frontend**: http://localhost:5174/
- **Backend API**: http://localhost:1337/api
- **Admin Panel**: http://localhost:1337/admin

### Production (When Deployed)
- **Frontend**: https://icap-bank.com
- **Backend API**: https://api.icap-bank.com
- **Admin Panel**: https://admin.icap-bank.com

## 📝 Notes for AI Assistants

### Folder Navigation
- Always check current directory with `pwd`
- Use `cd ../` to go to parent directory
- Use `cd icap-strapi/` or `cd icap-website-ICAP_FIREBASE/` to navigate projects

### Common Commands
```bash
# Check current location
pwd

# Navigate to backend
cd icap-strapi

# Navigate to frontend  
cd icap-website-ICAP_FIREBASE

# List available scripts
npm run

# Install dependencies (if needed)
npm install
```

### Workspace Context
- Both projects are independent but connected via API
- Changes in one project don't affect the other
- Use the workspace file for VS Code development
- Terminal commands work from any folder in the workspace

---

**Last Updated**: July 26, 2025  
**Workspace Version**: 1.0  
**Security Level**: Banking Grade 