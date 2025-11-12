# How to Add Real Instagram Posts

## ✅ Quick Method (5 Minutes)

### Step 1: Get Instagram Post URLs

1. Go to [instagram.com/h.krn_](https://www.instagram.com/h.krn_/)
2. Click on any post you want to feature
3. Click the three dots (...) at the top right
4. Click "Copy link"
5. You'll get a URL like: `https://www.instagram.com/p/ABC123xyz/`

### Step 2: Replace in Code

Open `components/InstagramSection.tsx` and find these lines:

```jsx
data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE1/"
```

Replace `EXAMPLE1`, `EXAMPLE2`, `EXAMPLE3` with your actual post codes.

**Example:**
If your post URL is `https://www.instagram.com/p/C5xYzAbcDef/`, use:

```jsx
data-instgrm-permalink="https://www.instagram.com/p/C5xYzAbcDef/"
```

### Step 3: Save and Refresh

1. Save the file
2. Refresh your browser
3. Wait 2-3 seconds for Instagram to load the embeds
4. Done! ✨

## 📝 Full Example

Here's what a real embed looks like:

```jsx
<blockquote 
  className="instagram-media" 
  data-instgrm-captioned 
  data-instgrm-permalink="https://www.instagram.com/p/C5xYzAbcDef/"
  data-instgrm-version="14"
  style={{ 
    background: '#000',
    border: 0,
    borderRadius: '12px',
    margin: '1px',
    maxWidth: '100%',
    minWidth: '280px',
    padding: 0,
    width: 'calc(100% - 2px)'
  }}
/>
```

## 🎯 Tips for Best Results

### Choose Your Best Posts
- High-quality images/videos
- Good engagement (likes/comments)
- Represents your work well
- Mix of videography and photography

### Recommended Layout
- **3 posts** on desktop (grid)
- **1-2 posts** on mobile (stacked)
- Update monthly with new work

### Post Selection Strategy
1. **Post 1**: Your best/most recent work
2. **Post 2**: Different style/project type
3. **Post 3**: Behind-the-scenes or process

## 🔧 Troubleshooting

### Posts Not Loading?

**Problem**: Embeds show placeholder
**Solution**: 
1. Check the URL is correct
2. Make sure the post is public (not private)
3. Wait 3-5 seconds for Instagram script to load
4. Clear browser cache and refresh

### Embeds Look Weird?

**Problem**: Styling is off
**Solution**:
1. Don't modify the `style` prop
2. Keep the `data-instgrm-*` attributes
3. Instagram controls the embed appearance

### Script Not Loading?

**Problem**: Console error about Instagram script
**Solution**:
1. Check your internet connection
2. Instagram's embed script might be blocked
3. Try a different browser
4. Check if ad-blocker is interfering

## 🚀 Advanced: Dynamic Instagram Feed

Want posts to update automatically? Use the Instagram API:

### Option 1: Elfsight (Easiest)
```html
<!-- Add to InstagramSection.tsx -->
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-YOUR-ID"></div>
```

### Option 2: Instagram Basic Display API

1. Create Facebook Developer account
2. Set up Instagram Basic Display
3. Get access token
4. Fetch posts via API
5. Display in component

See `INSTAGRAM_SETUP.md` for detailed API instructions.

## 📱 Testing

After adding real posts:

1. ✅ Check on desktop
2. ✅ Check on mobile
3. ✅ Test all links work
4. ✅ Verify posts load quickly
5. ✅ Ensure responsive layout

## 🎨 Customization

### Change Number of Posts

Currently showing 3 posts. To show more:

1. Copy one of the `<blockquote>` blocks
2. Paste it below the others
3. Change the post URL
4. Adjust grid: `grid-cols-3` → `grid-cols-4`

### Change Layout

**2 Columns:**
```jsx
className="grid md:grid-cols-2 gap-4"
```

**4 Columns:**
```jsx
className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
```

## ✨ Example with Real Posts

Here's a complete example with 3 real posts:

```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Post 1 */}
  <blockquote 
    className="instagram-media" 
    data-instgrm-captioned 
    data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_1/"
    data-instgrm-version="14"
  />

  {/* Post 2 */}
  <blockquote 
    className="instagram-media" 
    data-instgrm-captioned 
    data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_2/"
    data-instgrm-version="14"
  />

  {/* Post 3 */}
  <blockquote 
    className="instagram-media" 
    data-instgrm-captioned 
    data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_3/"
    data-instgrm-version="14"
  />
</div>
```

## 🎯 Quick Checklist

- [ ] Get 3-6 Instagram post URLs
- [ ] Replace EXAMPLE1, EXAMPLE2, EXAMPLE3 in code
- [ ] Save file
- [ ] Refresh browser
- [ ] Wait for embeds to load
- [ ] Test on mobile
- [ ] Celebrate! 🎉

## 💡 Pro Tips

1. **Update Regularly**: Change posts monthly to keep content fresh
2. **Mix Content**: Show variety (videos, photos, BTS)
3. **High Quality**: Only feature your best work
4. **Call to Action**: Encourage visitors to follow on Instagram
5. **Mobile First**: Most visitors will be on mobile

## 🆘 Still Need Help?

If embeds aren't working:

1. Check browser console for errors (F12)
2. Verify Instagram URLs are correct
3. Ensure posts are public
4. Try incognito/private browsing
5. Test with a different post URL

---

**Current Status**: The code is ready! Just replace the EXAMPLE URLs with your real Instagram post links and you're done.

**Time Required**: 5 minutes to add 3 posts

**Difficulty**: Easy - just copy/paste URLs
