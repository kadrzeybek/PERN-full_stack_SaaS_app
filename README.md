# 🤖 AI-Powered SaaS Platform

A comprehensive full-stack Software as a Service (SaaS) application that leverages cutting-edge AI technologies to provide various content creation and image processing services. Built with modern web technologies and designed for scalability and performance.

![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![React](https://img.shields.io/badge/React-18+-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC)
![OpenAI](https://img.shields.io/badge/OpenAI-API-black)

## 📸 Application Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="screenshots/homepage.png" alt="Homepage" width="400"/>
        <br><b>🏠 Homepage</b>
      </td>
      <td align="center">
        <img src="screenshots/dashboard.png" alt="Dashboard" width="400"/>
        <br><b>📊 Dashboard</b>
      </td>
      <td align="center">
        <img src="screenshots/write-article.png" alt="Write Article" width="400"/>
        <br><b>✍️ Write Article</b>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="screenshots/generate-titles.png" alt="Generate Titles" width="400"/>
        <br><b>📝 Generate Titles</b>
      </td>
      <td align="center">
        <img src="screenshots/generate-image.png" alt="Generate Image" width="400"/>
        <br><b>🎨 Generate Image</b>
      </td>
      <td align="center">
        <img src="screenshots/remove-object.png" alt="Remove Object" width="400"/>
        <br><b>✂️ Remove Object</b>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="screenshots/remove-background.png" alt="Remove Background" width="400"/>
        <br><b>🖼️ Remove Background</b>
      </td>
      <td align="center">
        <img src="screenshots/review-resume.png" alt="Review Resume" width="400"/>
        <br><b>📄 Review Resume</b>
      </td>
      <td align="center">
        <img src="screenshots/community.png" alt="Community" width="400"/>
        <br><b>👥 Community</b>
      </td>
    </tr>
  </table>
</div>

## ✨ Features

### 🎯 Core AI Services
- **Article Generation**: AI-powered content creation with customizable length
- **Blog Title Generator**: Smart title suggestions for blog posts across various categories
- **Image Generation**: Text-to-image creation using advanced AI models
- **Background Removal**: Intelligent background removal from images
- **Object Removal**: Precise object removal from images using AI
- **Resume Analysis**: Comprehensive CV review with AI-generated feedback

### 👥 User Management
- **Authentication**: Secure user authentication via Clerk
- **Premium Plans**: Subscription-based premium features
- **Usage Tracking**: Free tier limitations (10 requests per user)
- **User Dashboard**: Personalized dashboard with creation history

### 🌐 Community Features
- **Public Gallery**: Share and discover community creations
- **Like System**: Engage with community content
- **Creation Sharing**: Publish creations to the community

## 🏗️ Architecture

### Frontend (React + Vite)
```
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Sidebar.jsx    # Dashboard sidebar
│   │   ├── Footer.jsx     # Site footer
│   │   └── ...
│   ├── pages/             # Application pages
│   │   ├── Home.jsx       # Landing page
│   │   ├── Dashboard.jsx  # User dashboard
│   │   ├── Layout.jsx     # Dashboard layout
│   │   └── AI Tools/      # Individual AI service pages
│   └── assets/            # Static assets and configurations
```

### Backend (Node.js + Express)
```
backend/
├── controllers/           # Business logic
│   ├── aiController.js   # AI service handlers
│   └── userController.js # User management
├── routes/               # API endpoints
│   ├── aiRoute.js       # AI service routes
│   └── userRoute.js     # User routes
├── middlewares/          # Custom middleware
│   └── auth.js          # Authentication middleware
├── config/              # Configuration files
│   ├── db.js           # Database connection
│   ├── cloudinary.js   # Image storage config
│   └── multer.js       # File upload config
└── server.js           # Entry point
```

## 🛠️ Tech Stack

### Frontend
- **React 18+**: Modern UI library with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Clerk**: Authentication and user management
- **Lucide React**: Modern icon library
- **React Markdown**: Markdown rendering

### Backend
- **Node.js**: JavaScript runtime
- **Express 5**: Web application framework
- **PostgreSQL**: Relational database (via Neon)
- **Clerk Express**: Server-side authentication
- **OpenAI API**: AI content generation (Gemini 2.0 Flash)
- **Cloudinary**: Image storage and processing
- **ClipDrop API**: Advanced image generation
- **PDF-Parse**: PDF document processing
- **Multer**: File upload handling

### Infrastructure
- **Neon Database**: Serverless PostgreSQL
- **Cloudinary**: Media management and optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm
- PostgreSQL database (Neon recommended)
- Cloudinary account
- Clerk account
- OpenAI API key (Gemini)
- ClipDrop API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kadrzeybek/PERN-full_stack_SaaS_app.git
   cd PERN-full_stack_SaaS_app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Configuration

Create `.env` files in both `backend` and `frontend` directories:

#### Backend `.env`
```env
# Server Configuration
PORT=5001
NODE_ENV=production

# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Authentication (Clerk)
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# AI Services
GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key

# Image Storage (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Frontend `.env`
```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API Configuration
VITE_API_URL=http://localhost:5001
```

### Database Setup

1. **Create PostgreSQL Database** (using Neon):
   ```sql
   CREATE TABLE creations (
       id SERIAL PRIMARY KEY,
       user_id VARCHAR(255) NOT NULL,
       prompt TEXT NOT NULL,
       content TEXT NOT NULL,
       type VARCHAR(50) NOT NULL,
       publish BOOLEAN DEFAULT false,
       likes TEXT[] DEFAULT '{}',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5001`

## 📡 API Documentation

### Authentication
All AI service endpoints require authentication via Clerk tokens.

### AI Services Endpoints

#### Article Generation
```http
POST /api/ai/generate-article
Content-Type: application/json
Authorization: Bearer <clerk_token>

{
  "prompt": "Write about artificial intelligence",
  "length": 800
}
```

#### Blog Title Generation
```http
POST /api/ai/generate-blog-title
Content-Type: application/json

{
  "prompt": "Generate a blog title for AI in healthcare"
}
```

#### Image Generation
```http
POST /api/ai/generate-image
Content-Type: application/json

{
  "prompt": "A futuristic city at sunset",
  "publish": true
}
```

#### Background Removal
```http
POST /api/ai/remove-image-background
Content-Type: multipart/form-data

{
  "image": <file>
}
```

#### Object Removal
```http
POST /api/ai/remove-image-object
Content-Type: multipart/form-data

{
  "image": <file>,
  "object": "person"
}
```

#### Resume Review
```http
POST /api/ai/resume-review
Content-Type: multipart/form-data

{
  "resume": <pdf_file>
}
```

## � Screenshots

<div align="center">

### Homepage & Dashboard
| Homepage | Dashboard |
|----------|-----------|
| ![Homepage](screenshots/homepage.png) | ![Dashboard](screenshots/dashboard.png) |
| *Landing page with hero section and features* | *User dashboard with AI tools overview* |

### AI Content Generation
| Write Article | Generate Blog Titles | Generate Images |
|--------------|---------------------|-----------------|
| ![Write Article](screenshots/write-article.png) | ![Generate Titles](screenshots/generate-titles.png) | ![Generate Images](screenshots/generate-images.png) |
| *AI-powered article writing* | *Blog title generation tool* | *AI image generation from prompts* |

### Image Processing Tools
| Remove Object | Remove Background |
|--------------|-------------------|
| ![Remove Object](screenshots/remove-object.png) | ![Remove Background](screenshots/remove-background.png) |
| *AI object removal from images* | *Background removal tool* |

### Additional Features
| Review Resume | Community |
|--------------|-----------|
| ![Review Resume](screenshots/review-resume.png) | ![Community](screenshots/community.png) |
| *AI-powered resume analysis* | *User community and shared content* |

</div>

> **Note**: Screenshots are coming soon! Replace the placeholder paths above with actual screenshots of your application.

## �📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
