# Personal Portfolio - Naved Abrar Nibir

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, a beautiful UI with shadcn/ui components, and showcases my skills, projects, and experience as a Full Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Ready**: Built with theme support using next-themes
- **Interactive Sections**:
  - Hero Section with social links
  - About Me with skills showcase
  - Work Experience timeline
  - Projects portfolio
  - Education background
  - Contact form
- **Component Library**: Powered by shadcn/ui and Radix UI primitives
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Type Safe**: Built with TypeScript for better development experience
- **Performance Optimized**: Fast loading with Vite and React SWC

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon set
- **next-themes** - Theme management

### Form & Validation
- **React Hook Form 7.61.1** - Form management
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Data Management
- **TanStack Query 5.83.0** - Server state management
- **React Context** - Global state management

### Developer Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript ESLint** - TypeScript linting

## 📦 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── components.json        # shadcn/ui config
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nibear01/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server (port 8080)
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Customization

### Adding New Components

The project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Modifying Theme

Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Updating Content

- **Personal Info**: Edit `src/components/HeroSection.tsx`
- **Skills**: Update `src/components/AboutSection.tsx`
- **Experience**: Modify `src/components/ExperienceSection.tsx`
- **Projects**: Update `src/components/ProjectsSection.tsx`
- **Education**: Edit `src/components/EducationSection.tsx`
- **Contact**: Modify `src/components/ContactSection.tsx`

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

## 🎯 Performance

- ⚡ Lightning-fast page loads with Vite
- 🎨 Optimized animations
- 📦 Code splitting for better performance
- 🖼️ Lazy loading for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Naved Abrar (Nibir)**
- GitHub: [@nibear01](https://github.com/nibear01)
- LinkedIn: [Naved Abrar](https://www.linkedin.com/in/naved-abrar)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Icon set
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

<p align="center">Made with ❤️ by Naved Abrar (Nibir)</p>
<p align="center">⭐ Star this repo if you like it!</p>
