# Quick Reference Guide

## 🚀 Run the Site

```bash
cd portfolio
npm run dev
```

Open: http://localhost:3000

## 📸 Add Auto-Updating Instagram Feed (10 Minutes)

### Step 1: Create Behold Account
1. Go to [behold.so](https://behold.so)
2. Sign up (free)
3. Connect Instagram (@h.krn_)

### Step 2: Create Feed Widget
1. Click "Create Feed"
2. Choose Grid layout
3. Select Dark theme
4. Set 6-9 posts
5. Configure: Rounded corners, hover effects

### Step 3: Get Feed ID
1. Copy your Feed ID (looks like: `abc123xyz`)
2. Open `components/InstagramSection.tsx`
3. Replace `YOUR_FEED_ID` with your actual ID

### Step 4: Done!
Save, refresh browser. Feed auto-updates when you post! ✨

**Full guide:** See `INSTAGRAM_AUTO_SETUP.md`

## 🎨 Design Style

**Apple-Inspired Dark Mode**
- Pure black background (#000)
- Blue accents (#2563EB)
- Glass morphism cards
- 980px max width
- Minimal, clean, professional

## 📁 File Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Styles
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── InstagramSection.tsx  # Instagram feed ⭐
│   ├── Services.tsx     # Services
│   └── Contact.tsx      # Contact form
└── public/
    └── images/          # Add images here
```

## 🔧 Common Edits

### Change Colors
`app/globals.css`:
```css
.text-gradient {
  @apply bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400;
}
```

### Update Contact Info
`components/Contact.tsx`:
- Phone: Line 32
- WhatsApp: Line 48
- Instagram: Line 64

### Modify Services
`components/Services.tsx`:
- Edit `services` array (lines 5-20)

## 📱 Contact Info

- **Phone**: +90 505 313 30 31
- **WhatsApp**: Same number
- **Instagram**: @h.krn_
- **Location**: Istanbul, Turkey

## 🌐 Deploy

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at vercel.com

## 📚 Documentation

- `README.md` - Full documentation
- `HOW_TO_ADD_REAL_INSTAGRAM.md` - Instagram setup ⭐
- `APPLE_STYLE_GUIDE.md` - Design system
- `QUICKSTART.md` - Getting started

## ✅ Pre-Launch Checklist

- [ ] Add real Instagram posts
- [ ] Test all contact links
- [ ] Check mobile responsiveness
- [ ] Verify Instagram embeds load
- [ ] Test contact form
- [ ] Add custom domain (optional)

## 🆘 Troubleshooting

**Instagram posts not loading?**
- Check URLs are correct
- Wait 3-5 seconds
- Ensure posts are public
- Clear browser cache

**Site not running?**
```bash
rm -rf .next
npm run dev
```

**Port in use?**
```bash
pkill -f "next dev"
npm run dev
```

## 🎯 Key Features

✅ Apple-style dark mode
✅ Instagram integration ready
✅ Fully responsive
✅ Contact form
✅ Phone/WhatsApp links
✅ Smooth animations
✅ Glass morphism effects
✅ 980px Apple-standard width

## 💡 Pro Tips

1. **Update Instagram posts monthly** - Keep content fresh
2. **Use high-quality images** - Represents your work
3. **Test on mobile first** - Most visitors are mobile
4. **Keep it simple** - Less is more (Apple philosophy)
5. **Fast loading** - Optimize everything

## 🎨 Design Tokens

```css
/* Colors */
Background: #000000
Text: #FFFFFF
Accent: #2563EB (Blue 600)
Glass: rgba(255,255,255,0.05)

/* Spacing */
Section: py-24 lg:py-32
Container: max-w-[980px]
Gap: gap-4 to gap-6

/* Typography */
Hero: text-5xl md:text-7xl lg:text-8xl
Heading: text-4xl md:text-6xl
Body: text-lg md:text-xl

/* Effects */
Blur: backdrop-blur-2xl
Border: border-white/10
Rounded: rounded-xl to rounded-3xl
```

## 📞 Support

Check these files for help:
- Instagram issues → `HOW_TO_ADD_REAL_INSTAGRAM.md`
- Design questions → `APPLE_STYLE_GUIDE.md`
- General setup → `README.md`

---

**Current Status**: ✅ Site is ready! Just add real Instagram posts and deploy.

**Time to Launch**: 5 minutes (add Instagram) + 2 minutes (deploy) = 7 minutes total
