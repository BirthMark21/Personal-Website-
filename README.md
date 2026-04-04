# Misganaw M - Personal Portfolio Website

A modern, responsive portfolio website showcasing professional services, projects, skills, and experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.3-purple)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Built with Vite for optimal speed
- 🎯 **Modular Architecture** - Reusable components and centralized data
- 🔍 **Project Filtering** - Filter projects by status (All/Completed/Ongoing)
- 💼 **Service Showcase** - Display 8 professional services
- 📊 **Skills Display** - Interactive skill cards with progress bars
- 📄 **Resume Viewer** - Embedded PDF resume viewer
- 📧 **Contact Form** - Get in touch easily

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd Personal-Website-

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Personal-Website-/
├── src/
│   ├── components/
│   │   ├── common/           # Shared components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── ScrollToTop.jsx
│   │   └── ui/               # Reusable UI components
│   │       ├── ServiceCard.jsx
│   │       ├── ProjectCard.jsx
│   │       └── SkillCard.jsx
│   ├── data/                 # Centralized data
│   │   ├── services.js       # Service offerings
│   │   ├── projects.js       # Project portfolio
│   │   └── skills.js         # Technical & soft skills
│   ├── Pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About me
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Skills.jsx        # Skills & expertise
│   │   ├── Portfolio.jsx     # Portfolio gallery
│   │   ├── Resume.jsx        # Resume & CV
│   │   ├── Blog.jsx          # References
│   │   └── Contact.jsx       # Contact form
│   ├── img/                  # Images and assets
│   ├── App.jsx               # Main app component
│   ├── AllRoutes.jsx         # Route definitions
│   ├── MyContext.jsx         # React Context
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#764ba2` (Purple)
- **Accent**: `#f59e0b` (Amber)
- **Success**: `#10b981` (Green)
- **Dark**: `#0a0e27`
- **Light**: `#f8fafc`

### Typography
- **Font Family**: Poppins, sans-serif
- **Headings**: 700-900 weight
- **Body**: 400-600 weight

## 📄 Pages

### Home (`/`)
- Hero section with animated heading
- 8 service cards with descriptions
- Smooth scroll animations

### About (`/about`)
- Personal introduction
- Profile image
- Passion cards (Software Dev, AI/ML)
- Expandable details

### Projects (`/projects`)
- Project statistics (20+ ideas, 4 completed, 6 ongoing)
- Filter buttons (All/Completed/Ongoing)
- 10 project cards with:
  - Category badges
  - Technology tags
  - Descriptions
  - View links

### Skills (`/skills`)
- Technical skills with categories
- Soft skills
- Progress bars
- Skill filtering

### Portfolio (`/portfolio`)
- Image gallery
- Project screenshots
- Responsive grid layout

### Resume (`/resume`)
- Embedded PDF viewer
- Downloadable CV
- Professional experience

### Reference (`/reference`)
- Academic references
- Contact information
- Professional recommendations

### Contact (`/contact`)
- Contact form
- Location map
- Social media links

## 🔧 Customization

### Adding a New Service

Edit `src/data/services.js`:

```javascript
{
  id: 9,
  title: "Your Service",
  description: "Service description",
  details: ["Feature 1", "Feature 2", "Feature 3"],
  icon: "🎯"
}
```

### Adding a New Project

Edit `src/data/projects.js`:

```javascript
{
  id: 11,
  title: "Project Name",
  description: "Project description",
  category: "completed", // or "ongoing"
  technologies: ["React", "Node.js"],
  link: "/projects/11",
  image: "project-1 (11).png"
}
```

### Adding a New Skill

Edit `src/data/skills.js`:

```javascript
{
  id: 13,
  name: "New Skill",
  level: 85,
  category: "Frontend"
}
```

## 🛠️ Technologies

- **Frontend**: React 18.2
- **Routing**: React Router v6
- **Build Tool**: Vite 5.3
- **Styling**: CSS3, Bootstrap 5
- **Icons**: React Icons
- **PDF Viewer**: @react-pdf-viewer
- **Deployment**: GitHub Pages

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.3",
  "react-icons": "^4.12.0",
  "bootstrap": "^5.3.3",
  "@react-pdf-viewer/core": "^3.12.0",
  "leaflet": "^1.9.4"
}
```

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Vercel (Primary Deployment)

The site is deployed on Vercel. To deploy:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms
- **Netlify**: Drag & drop `dist` folder
- **AWS S3**: Upload `dist` folder

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Misganaw M**
- Portfolio: [Misganaw M](https://misganawm.vercel.app)
- GitHub: [@birthmark21](https://github.com/birthmark21)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using React and Vite**
