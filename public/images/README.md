# Images Folder

## How to Add Your Work

1. **Gallery Images**: Place your portfolio images in `/public/images/gallery/`
   - Name them descriptively (e.g., `wedding-istanbul-2024.jpg`)
   - Recommended size: 1920x1080px or similar aspect ratio
   - Format: JPG or PNG

2. **Videos**: For video thumbnails, add them to the same folder
   - You can link to YouTube/Vimeo or host videos elsewhere

3. **Update Gallery Component**: Edit `components/Gallery.tsx` and replace the placeholder projects with your actual work:

```javascript
const projects = [
  { 
    id: 1, 
    type: 'video', 
    title: 'Your Project Title',
    category: 'videography',
    image: '/images/gallery/your-image.jpg',
    videoUrl: 'https://youtube.com/...' // optional
  },
  // ... more projects
];
```

## Tips
- Use high-quality images that showcase your best work
- Mix videography and photography projects
- Keep file sizes optimized (use tools like TinyPNG)
- Consider adding a hero background image at `/public/images/hero-bg.jpg`
