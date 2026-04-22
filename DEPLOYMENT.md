# 🚀 Panduan Deploy Portfolio ke Netlify

## Cara Tercepat & Termudah (Drag & Drop)

### Step 1: Build Project
```bash
npm install
npm run build
```

Setelah selesai, akan ada folder `dist` di project kamu.

### Step 2: Deploy ke Netlify

1. **Buka** [netlify.com](https://netlify.com)
2. **Login/Sign Up** (bisa pakai GitHub)
3. **Scroll ke bawah** sampai ada area "Want to deploy a new site without connecting to Git?"
4. **Drag & drop** folder `dist` ke area tersebut
5. **Done!** 🎉 Portfolio kamu sudah online!

Netlify akan kasih URL random seperti: `random-name-12345.netlify.app`

### Step 3: Custom Domain (Optional)

1. Di Netlify dashboard, klik "Domain settings"
2. Klik "Options" → "Edit site name"
3. Ubah jadi: `nxozu-portfolio.netlify.app` (atau nama lain yang available)
4. Save!

---

## Cara dengan Git (Recommended untuk Update Otomatis)

### Step 1: Push ke GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit - Portfolio Nxozu"

# Create repo di GitHub, lalu:
git branch -M main
git remote add origin https://github.com/username/portfolio-nxozu.git
git push -u origin main
```

### Step 2: Connect ke Netlify

1. Login ke [netlify.com](https://netlify.com)
2. Klik "Add new site" → "Import an existing project"
3. Pilih "Deploy with GitHub"
4. Authorize Netlify
5. Pilih repository `portfolio-nxozu`
6. **Build Settings** (auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Klik "Deploy site"

### Step 3: Automatic Deployment

Sekarang setiap kali kamu push ke GitHub, Netlify akan otomatis rebuild & redeploy! 🚀

---

## Alternative: Vercel

### Quick Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

---

## Tips Deployment

✅ **Sebelum Deploy:**
- Test di local: `npm run dev`
- Build test: `npm run build` lalu `npm run preview`
- Check semua link works
- Test responsive di berbagai device

✅ **After Deploy:**
- Test live site di browser
- Test di mobile
- Share link ke teman untuk feedback

✅ **Custom Domain** (Optional):
- Beli domain di Namecheap, GoDaddy, dll
- Connect ke Netlify/Vercel
- Setup DNS

---

## Troubleshooting

### Build failed di Netlify?
- Check Build logs
- Pastikan `package.json` benar
- Test local build: `npm run build`

### 404 Error?
- Tambah file `_redirects` di folder `public`:
  ```
  /*    /index.html   200
  ```

### Slow Loading?
- Optimize images (gunakan WebP)
- Enable Netlify's asset optimization
- Use lazy loading

---

## Update Portfolio

### Cara Update (Git Method):
```bash
# Edit code kamu
# Lalu:
git add .
git commit -m "Update projects section"
git push
```

Netlify akan otomatis deploy update!

### Cara Update (Drag & Drop Method):
```bash
npm run build
```
Drag & drop folder `dist` yang baru ke Netlify dashboard.

---

Good luck! 🚀
