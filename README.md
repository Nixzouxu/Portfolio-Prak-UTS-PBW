# 🌟 Nxozu Portfolio Website

Portfolio website pribadi dengan design modern dark theme dan purple gradient aesthetic. Dibangun menggunakan React, Vite, Tailwind CSS, dan Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- 🎨 **Modern Design** - Dark theme dengan purple gradient aesthetic
- 🚀 **Smooth Animations** - Menggunakan Framer Motion untuk animasi smooth
- 📱 **Fully Responsive** - Mobile-friendly design
- ⚡ **Fast Performance** - Built with Vite untuk development super cepat
- 🎯 **Interactive UI** - Hover effects dan smooth scroll navigation
- 📧 **Contact Form** - Functional contact form dengan mailto
- 🎭 **Sections**:
  - Hero Section dengan gradient text
  - About/Biodata Section
  - Skills & Technologies
  - Projects Portfolio
  - Contact Form

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.1
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **Icons**: React Icons & Lucide React
- **Deployment**: Vercel / Netlify

## 📦 Installation

### Prerequisites
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Setup Steps

1. **Extract project** (kalau kamu download zip)
   ```bash
   # Atau kalau dari GitHub:
   git clone <repository-url>
   cd portfolio-nxozu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   - Buka `http://localhost:5173`
   - Portfolio kamu akan running!

## 🚀 Deployment

### Deploy ke Netlify (Recommended - Paling Mudah!)

1. **Push ke GitHub** (kalau belum)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy di Netlify**
   - Buka [netlify.com](https://netlify.com)
   - Login/Sign up
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub dan pilih repository
   - Build settings (auto-detect):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Done!** Portfolio kamu sudah online! 🎉

### Deploy ke Vercel (Alternative)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. Follow the prompts dan done!

## 📝 Customization Guide

### Mengubah Data Personal

Edit file-file component di folder `src/components/`:

1. **Hero.jsx** - Nama, tagline, social media links
2. **About.jsx** - Biodata lengkap
3. **Skills.jsx** - Skills dan tech stack kamu
4. **Projects.jsx** - Project portfolio kamu
5. **Contact.jsx** - Email dan social media

### Mengubah Warna Theme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#8B5CF6', // Ubah warna primary
    dark: '#7C3AED',
    light: '#A78BFA',
  },
}
```

### Menambah/Mengurangi Section

Edit `src/App.jsx` dan tambah/hapus component yang diinginkan.

## 📂 Project Structure

```
portfolio-nxozu/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Performance Tips

- ✅ Image optimization: Gunakan WebP format
- ✅ Lazy loading: Sudah implemented dengan Framer Motion
- ✅ Code splitting: Automatic dengan Vite
- ✅ Minification: Automatic saat build

## 🐛 Troubleshooting

### Port 5173 sudah digunakan?
```bash
# Ubah port di package.json atau:
npm run dev -- --port 3000
```

### Dependencies error?
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Build error?
```bash
# Clear cache dan build ulang
npm run build -- --force
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Feel free to use this template!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Email: M.hafidz9999@gmail.com
- GitHub: [@Nixzouxu](https://github.com/Nixzouxu)
- Instagram: [@nxuzn.ae](https://www.instagram.com/nxuzn.ae/)

---

Made with ❤️ by Nxozu using React & Tailwind CSS
