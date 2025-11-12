# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Run the Development Server

```bash
cd portfolio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. What You'll See

✅ **Hero Section** - Elegant introduction with Hosein's name
✅ **Instagram Section** - Profile card with placeholder posts
✅ **Services Section** - Videography, Photography, Creative Direction
✅ **Contact Section** - Phone, WhatsApp, Instagram, and contact form

### 3. Customize Content

#### Update Services
Edit `components/Services.tsx`:
- Change service descriptions
- Update features
- Modify statistics

#### Update Contact Info
Edit `components/Contact.tsx`:
- Phone number (currently: +90 505 313 30 31)
- WhatsApp link
- Instagram handle (@h.krn_)

#### Change Colors
Edit `app/globals.css`:
```css
.text-gradient {
  @apply bg-gradient-to-r from-YOUR-COLOR via-YOUR-COLOR to-YOUR-COLOR;
}
```

### 4. Add Real Instagram Feed

See `INSTAGRAM_SETUP.md` for detailed instructions.

**Quick option**: Use [Elfsight](https://elfsight.com/instagram-feed-instashow/) or [SnapWidget](https://snapwidget.com/)

### 5. Deploy to Production

#### Vercel (Easiest)
```bash
# Push to GitHub first
git add .
git commit -m "Initial commit"
git push

# Then deploy
npm install -g vercel
vercel
```

Or use the [Vercel Dashboard](https://vercel.com) to import from GitHub.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx          # Top navigation
│   ├── Hero.tsx            # Hero section
│   ├── InstagramSection.tsx # Instagram feed
│   ├── Services.tsx        # Services section
│   └── Contact.tsx         # Contact section
└── public/
    └── images/             # Place images here
```

## 🎨 Design Features

- **Minimalist**: Clean white background, lots of space
- **Premium**: Subtle shadows, smooth animations
- **Instagram-First**: Profile and feed prominently featured
- **Mobile-Responsive**: Works perfectly on all devices

## 📱 Contact Information

Currently configured:
- **Phone**: +90 505 313 30 31
- **WhatsApp**: Same number
- **Instagram**: @h.krn_
- **Location**: Istanbul, Turkey

## 🛠 Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Google Fonts (Playfair Display + Inter)

## 📚 Documentation

- `README.md` - Full documentation
- `INSTAGRAM_SETUP.md` - Instagram feed setup
- `DESIGN_NOTES.md` - Design system details

## 🆘 Need Help?

Common issues:

**Port already in use?**
```bash
# Kill the process
pkill -f "next dev"
# Or use a different port
npm run dev -- -p 3001
```

**Styles not updating?**
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

**TypeScript errors?**
```bash
# Restart TypeScript server in your editor
# Or ignore and run anyway - it will work
```

## ✅ Checklist Before Launch

- [ ] Update all contact information
- [ ] Add real Instagram feed (or keep placeholder)
- [ ] Test on mobile devices
- [ ] Test all links (phone, WhatsApp, Instagram)
- [ ] Customize colors if desired
- [ ] Add custom domain (optional)
- [ ] Set up contact form backend (optional)

## 🎯 Next Steps

1. **Add Images**: Place hero background or other images in `/public/images/`
2. **Instagram Feed**: Follow `INSTAGRAM_SETUP.md` to add real posts
3. **Contact Form**: Set up Formspree or EmailJS for form submissions
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **SEO**: Add meta descriptions and Open Graph images

---

**You're all set!** The site is ready to go live. Just customize the content and deploy.
