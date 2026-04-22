# ⚡ Quick Start Guide

Panduan super cepat untuk run portfolio kamu!

## 🎯 3 Langkah Mudah

### 1️⃣ Install Dependencies
```bash
npm install
```
Tunggu sampai selesai (sekitar 1-2 menit).

### 2️⃣ Run Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Buka browser dan akses:
```
http://localhost:5173
```

**DONE!** 🎉 Portfolio kamu sudah jalan!

---

## 🎨 Mau Edit Konten?

### Ubah Nama & Info Personal
Edit file: `src/components/Hero.jsx` dan `src/components/About.jsx`

### Ubah Projects
Edit file: `src/components/Projects.jsx`

### Ubah Skills
Edit file: `src/components/Skills.jsx`

### Ubah Email/Social Media
Edit file: `src/components/Contact.jsx`

Setelah edit, **save** aja - browser akan auto-reload! 🔄

---

## 🚀 Siap Deploy?

### Cara Termudah - Netlify Drag & Drop:

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Buka** [netlify.com/drop](https://app.netlify.com/drop)

3. **Drag & drop** folder `dist` ke website

4. **BOOM!** Portfolio online! 🌐

---

## 🆘 Butuh Bantuan?

### Error saat `npm install`?
```bash
# Hapus node_modules dan coba lagi
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 sudah dipakai?
```bash
# Gunakan port lain
npm run dev -- --port 3000
```

### Preview production build:
```bash
npm run build
npm run preview
```

---

## 📚 Next Steps

1. ✅ Test semua section
2. ✅ Ganti semua data dengan data kamu
3. ✅ Test di mobile (inspect → responsive mode)
4. ✅ Deploy ke Netlify/Vercel
5. ✅ Share portfolio kamu! 🎊

---

**Pro Tip:** Bookmark `http://localhost:5173` supaya gampang akses! 🔖

Good luck! 💪
