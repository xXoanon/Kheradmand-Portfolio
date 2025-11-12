# Hosein Kheradmand - Premium Portfolio

A minimalist, premium portfolio website focused on Instagram integration and modern design.

## 🎨 Design Philosophy

- **Minimalist & Premium**: Clean white background with black accents and gold highlights
- **Instagram-First**: Main focus on Instagram feed and profile
- **Typography**: Playfair Display (serif) for headings, Inter for body text
- **Subtle Animations**: Smooth, professional transitions using Framer Motion
- **Mobile-First**: Fully responsive across all devices

## 🚀 Quick Start

```bash
cd portfolio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📱 Instagram Integration

The site features a dedicated Instagram section with:
- Profile card with bio and follow button
- Grid preview of latest posts (placeholder - see below to add real feed)
- Direct links to Instagram profile

### Adding Real Instagram Feed

To display actual Instagram posts, you have several options:

#### Option 1: Elfsight Widget (Easiest)
1. Go to [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/)
2. Create a free widget
3. Copy the embed code
4. Replace the placeholder grid in `components/InstagramSection.tsx`

#### Option 2: Instagram Basic Display API
1. Create a Facebook Developer account
2. Set up Instagram Basic Display API
3. Get an access token
4. Fetch posts using the API
5. Update the component to display real data

#### Option 3: Third-Party Services
- [SnapWidget](https://snapwidget.com/)
- [Juicer](https://www.juicer.io/)
- [Behold](https://behold.so/)

## 🎯 Sections

1. **Hero** - Elegant introduction with name and tagline
2. **Instagram** - Embedded Instagram profile and feed
3. **Services** - What Hosein offers (Videography, Photography, Creative Direction)
4. **Contact** - Direct contact via phone, WhatsApp, Instagram, and contact form

## 🛠 Customization

### Colors

Edit `app/globals.css` to change the accent color:

```css
.text-gradient {
  @apply bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent;
}
```

Try these alternatives:
- **Silver/Gray**: `from-gray-400 via-gray-500 to-gray-600`
- **Blue**: `from-blue-400 via-blue-500 to-blue-600`
- **Rose Gold**: `from-rose-400 via-pink-500 to-orange-500`

### Typography

The site uses two Google Fonts:
- **Playfair Display** (serif) - For elegant headings
- **Inter** (sans-serif) - For clean body text

To change fonts, edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

### Content

#### Update Services
Edit `components/Services.tsx` to modify:
- Service titles and descriptions
- Features list
- Statistics

#### Update Contact Info
Edit `components/Contact.tsx` to change:
- Phone number
- WhatsApp link
- Instagram handle
- Form fields

## 📸 Adding Images

### Background Images
Place images in `/public/images/` and reference them:

```jsx
<div style={{ backgroundImage: 'url(/images/your-image.jpg)' }} />
```

### Hero Background
To add a subtle background image to the hero:

```jsx
// In components/Hero.tsx
<div 
  className="absolute inset-0 opacity-5"
  style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
/>
```

## 🌐 Deploy

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy (automatic)

Your site will be live at `your-name.vercel.app`

### Custom Domain

In Vercel dashboard:
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 📧 Contact Form Setup

The contact form is currently frontend-only. To make it functional:

### Option 1: Formspree (Easiest)
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Add EmailJS code to form submit handler

### Option 3: Next.js API Route
Create `app/api/contact/route.ts` and handle form submission server-side.

## 🎨 Design Features

- **Premium shadows**: Subtle, professional depth
- **Hover effects**: Smooth lift animations on interactive elements
- **Scroll animations**: Elements fade in as you scroll
- **Custom scrollbar**: Minimal, matches design aesthetic
- **Font smoothing**: Crisp, clear text rendering

## 📱 Contact Information

Currently configured:
- **Phone**: +90 505 313 30 31
- **WhatsApp**: Same number
- **Instagram**: [@h.krn_](https://www.instagram.com/h.krn_/)
- **Location**: Istanbul, Turkey

## 🔧 Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Fonts** - Playfair Display & Inter

## 📄 License

Personal portfolio for Hosein Kheradmand.

---

Built with precision and care for a premium web experience.
