# Design System & Notes

## 🎨 Color Palette

### Primary Colors
- **White**: `#FFFFFF` - Main background
- **Black**: `#000000` - Text, buttons, contrast
- **Gold Gradient**: Amber 600 → Amber 500 → Yellow 500

### Grays
- **Gray 50**: `#F9FAFB` - Section backgrounds
- **Gray 100**: `#F3F4F6` - Subtle backgrounds
- **Gray 400**: `#9CA3AF` - Muted text
- **Gray 600**: `#4B5563` - Secondary text

## 📐 Typography

### Font Families
- **Headings**: Playfair Display (Serif) - Elegant, classic
- **Body**: Inter (Sans-serif) - Clean, modern, readable

### Font Sizes
- **Hero**: 6xl → 8xl → 9xl (responsive)
- **Section Headings**: 4xl → 6xl
- **Body**: base → lg
- **Small**: sm → xs

### Font Weights
- **Light**: 300 - Used for large headings
- **Regular**: 400 - Body text
- **Medium**: 500 - Emphasis
- **Semibold**: 600 - Buttons, strong emphasis

## 🎭 Design Principles

### 1. Minimalism
- Lots of white space
- Clean lines
- No clutter
- Focus on content

### 2. Premium Feel
- Subtle shadows
- Smooth animations
- High-quality typography
- Attention to detail

### 3. Instagram-First
- Instagram is the hero
- Direct links everywhere
- Profile prominently featured
- Easy to follow

### 4. Professional
- Business-appropriate
- Trustworthy
- Sophisticated
- International appeal

## 🎬 Animations

### Timing
- **Fast**: 0.3s - Hovers, small interactions
- **Medium**: 0.6-0.8s - Section reveals
- **Slow**: 1s+ - Hero entrance

### Easing
- **Default**: ease-in-out
- **Hover**: ease
- **Scroll**: easeInOut

### Types
- **Fade In**: opacity 0 → 1
- **Slide Up**: y: 20 → 0
- **Slide Side**: x: ±30 → 0
- **Scale**: scale: 0.95 → 1
- **Lift**: translateY: 0 → -4px

## 📱 Responsive Breakpoints

```
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Laptops
xl: 1280px  - Desktops
2xl: 1536px - Large screens
```

## 🎯 Component Structure

### Hero
- Full viewport height
- Centered content
- Scroll indicator
- Subtle background pattern

### Instagram Section
- Gray background for contrast
- White card with shadow
- Profile info at top
- Grid of posts
- CTA to Instagram

### Services
- White background
- Three columns on desktop
- Cards with hover effects
- Stats section below

### Contact
- Black background (contrast)
- Two columns: info + form
- White text
- Gold accents on hover

## 🔧 Utility Classes

### Custom Classes
```css
.text-gradient - Gold gradient text
.premium-shadow - Subtle, professional shadow
.hover-lift - Lift on hover with shadow
```

### Common Patterns
```jsx
// Section padding
className="py-24 lg:py-32"

// Container
className="max-w-7xl mx-auto px-6 lg:px-12"

// Button
className="px-8 py-4 bg-black text-white rounded-full"

// Card
className="bg-white rounded-2xl premium-shadow p-8"
```

## 🎨 Design Inspiration

- **Apple**: Minimalism, white space, premium feel
- **Stripe**: Clean typography, subtle animations
- **Awwwards**: Modern web design trends
- **Behance**: Creative portfolio layouts

## 📝 Content Guidelines

### Tone of Voice
- Professional but approachable
- Confident but not arrogant
- Creative but clear
- International (English)

### Writing Style
- Short sentences
- Active voice
- Clear CTAs
- Benefit-focused

## 🚀 Performance

### Optimizations
- Next.js automatic code splitting
- Image optimization (when added)
- Font optimization (Google Fonts)
- Minimal JavaScript
- CSS purging (Tailwind)

### Lighthouse Goals
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🎯 Conversion Goals

1. **Primary**: Get Instagram followers
2. **Secondary**: Get contacted for projects
3. **Tertiary**: Build brand awareness

## 📊 Success Metrics

- Instagram profile clicks
- Follow button clicks
- Contact form submissions
- WhatsApp/Phone clicks
- Time on site
- Scroll depth

---

**Design Philosophy**: Less is more. Every element serves a purpose. Quality over quantity.
