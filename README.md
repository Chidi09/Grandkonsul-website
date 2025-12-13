# Grandkonsul Properties Website

A premium, high-performance website for Grandkonsul Properties built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: React 18 + Vite for lightning-fast development and builds
- **SEO Optimized**: React Helmet Async for dynamic meta tags and titles
- **Smooth Animations**: Framer Motion for premium, polished interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Premium Branding**: Custom color palette matching Grandkonsul's deep emerald green and metallic gold
- **Performance**: Optimized for Vercel deployment with proper routing configuration

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Helmet Async** - SEO management

## 📦 Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## 🏃 Running the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🚢 Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and configure the build
4. The `vercel.json` file ensures proper routing for React Router

## 📁 Project Structure

```
grandkonsul-site/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Premium navigation with scroll effects
│   │   └── SEO.jsx         # SEO component for meta tags
│   ├── pages/
│   │   └── Home.jsx        # Home page with hero and intro sections
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js      # Custom Grandkonsul color palette
├── vercel.json             # Vercel routing configuration
└── vite.config.js
```

## 🎨 Custom Colors

The brand colors are defined in `tailwind.config.js`:

- **Grand Green**: `#004d40` - Deep emerald
- **Grand Gold**: `#c5a059` - Metallic gold
- **Grand Dark**: `#1a1a1a` - Rich black
- **Grand Light**: `#f8f9fa` - Off-white
- **Grand Muted**: `#8c8c8c` - Grey

Use them in your components like: `bg-grand-green`, `text-grand-gold`, etc.

## 📝 Next Steps

- [ ] Add About Us page content
- [ ] Add Services page with detailed offerings
- [ ] Add Projects/Portfolio page with image gallery
- [ ] Add Contact page with form
- [ ] Replace placeholder logo with actual Grandkonsul logo
- [ ] Add Google Fonts (Playfair Display & Lato are already linked in index.html)

## 📄 License

© 2025 Grandkonsul Ltd. All Rights Reserved.
