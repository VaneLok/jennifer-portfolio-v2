# Jennifer Amaya - Portfolio Website

A retro Windows 95/98 style portfolio website showcasing cybersecurity certifications, interior design projects, and creative work.

## About

This portfolio recreates the nostalgic desktop experience of classic Windows operating systems while presenting Jennifer Amaya's professional journey from interior design to cybersecurity. The site features:

- **Cybersecurity**: Professional certifications including CompTIA Security+, IBM Cybersecurity Analyst, and TryHackMe achievements, plus a detailed pfSense homelab project
- **Interior Design**: Project portfolio showcasing construction coordination and design work
- **Creative Work**: Art, 3D printing, and digital design projects

## Features

- Authentic Windows 95/98 desktop interface with draggable windows
- Retro-styled applications and file explorer
- Interactive desktop shortcuts and taskbar
- Responsive design that maintains the classic aesthetic
- Built with modern React and TypeScript

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: CSS with retro Windows theming
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:VaneLok/Resources-For-Website.git
cd Resources-For-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── applications/     # Desktop applications (Showcase Explorer)
│   ├── general/         # Reusable components (Icons, Links, etc.)
│   ├── os/             # OS components (Desktop, Windows, etc.)
│   └── showcase/       # Portfolio content pages
├── assets/             # Images, fonts, audio files
├── constants/          # App constants and types
├── hooks/             # Custom React hooks
└── types/             # TypeScript type definitions
```

## Key Pages

- **Home**: Desktop-style landing page with shortcuts
- **About**: Personal introduction and background
- **Experience**: Professional work history
- **Projects**: Categorized portfolio sections:
  - Cyber: Security certifications and homelab projects
  - Interiors: Design and construction work
  - Art: Creative projects and artwork

## License

Private repository - All rights reserved.

## Contact

Jennifer Amaya - jenniferamayavanessa@protonmail.com
