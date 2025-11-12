# Where to Add Your Behold Feed ID

## 📍 Exact Location

**File:** `components/InstagramSection.tsx`

**Line:** 75

**What to change:**
```jsx
// BEFORE (current):
<figure data-behold-id="YOUR_FEED_ID" />

// AFTER (with your ID):
<figure data-behold-id="abc123xyz" />
```

## 🎯 Step-by-Step

### 1. Get Your Feed ID from Behold

After creating your feed in Behold, you'll see:

```html
<figure data-behold-id="abc123xyz"></figure>
```

Copy just the ID part: `abc123xyz`

### 2. Open the File

Navigate to: `portfolio/components/InstagramSection.tsx`

### 3. Find Line 75

Look for this section:

```jsx
{/* Auto-updating Instagram Feed - Behold Widget */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative"
>
  {/* Behold Widget - Replace YOUR_FEED_ID with actual ID from behold.so */}
  <figure 
    data-behold-id="YOUR_FEED_ID"  // ← CHANGE THIS LINE
    style={{
      filter: 'brightness(0.95) contrast(1.1)',
    }}
  />
```

### 4. Replace the ID

Change:
```jsx
data-behold-id="YOUR_FEED_ID"
```

To:
```jsx
data-behold-id="abc123xyz"  // Your actual ID
```

### 5. Save the File

Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)

### 6. Refresh Browser

Go to http://localhost:3000 and refresh

Wait 2-3 seconds for the feed to load

## ✅ Complete Example

### Before:
```jsx
<figure 
  data-behold-id="YOUR_FEED_ID"
  style={{
    filter: 'brightness(0.95) contrast(1.1)',
  }}
/>
```

### After:
```jsx
<figure 
  data-behold-id="abc123xyz"
  style={{
    filter: 'brightness(0.95) contrast(1.1)',
  }}
/>
```

## 🔍 How to Find Your Feed ID

### In Behold Dashboard:

1. Go to [behold.so](https://behold.so)
2. Click on your feed
3. Click "Embed" or "Get Code"
4. You'll see something like:

```html
<script src="https://w.behold.so/widget.js" type="module"></script>
<figure data-behold-id="abc123xyz"></figure>
```

5. Copy the ID: `abc123xyz`

### Feed ID Format:

- Usually 8-12 characters
- Mix of letters and numbers
- Example: `abc123xyz`
- Example: `xYz789AbC`
- Example: `feed123test`

## ⚠️ Common Mistakes

### ❌ Wrong:
```jsx
// Don't include quotes inside quotes
data-behold-id=""abc123xyz""

// Don't include the full HTML
data-behold-id="<figure data-behold-id="abc123xyz"></figure>"

// Don't include the URL
data-behold-id="https://behold.so/abc123xyz"
```

### ✅ Correct:
```jsx
// Just the ID
data-behold-id="abc123xyz"
```

## 🧪 Testing

After adding your Feed ID:

1. **Save the file**
2. **Refresh browser** (http://localhost:3000)
3. **Wait 2-3 seconds** for feed to load
4. **You should see** your Instagram posts in a grid

### If It Works:
- ✅ You'll see your Instagram posts
- ✅ They'll be in a 3-column grid
- ✅ Hover effects will work
- ✅ Clicking opens Instagram

### If It Doesn't Work:
- ❌ Check Feed ID is correct
- ❌ Check no extra quotes or spaces
- ❌ Check Instagram is connected in Behold
- ❌ Wait a bit longer (can take 5-10 seconds first time)
- ❌ Check browser console (F12) for errors

## 🎨 What You'll See

After setup, the Instagram section will show:

1. **Profile Card** (top)
   - Instagram icon
   - @h.krn_
   - Bio
   - Follow button

2. **Instagram Feed** (middle)
   - 3 columns on desktop
   - 2 columns on tablet
   - 1 column on mobile
   - Your latest 6-9 posts
   - Hover effects
   - Click to open on Instagram

3. **CTA** (bottom)
   - Link to full Instagram profile

## 📱 Mobile View

On mobile, the feed automatically adjusts:
- 1 column layout
- Full-width posts
- Touch-friendly
- Fast loading

## 🔄 Auto-Updates

Once configured:
- Post on Instagram → Wait 1-2 hours → Appears on website
- No manual updates needed
- Always shows latest posts
- Zero maintenance

## 💡 Pro Tips

1. **Test First**: Use Behold's preview before adding to site
2. **Check Mobile**: Test on phone after setup
3. **Monitor**: Check Behold dashboard for analytics
4. **Update**: Change feed settings anytime in Behold

## 🆘 Still Stuck?

### Quick Fixes:

**Feed not loading?**
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

**Wrong ID?**
- Go back to Behold dashboard
- Copy ID again
- Make sure no extra spaces
- Try in incognito mode

**Still not working?**
- Check `INSTAGRAM_AUTO_SETUP.md` for troubleshooting
- Contact Behold support: support@behold.so
- Check browser console (F12) for errors

## ✨ That's It!

**One line to change:**
```jsx
data-behold-id="YOUR_FEED_ID"  →  data-behold-id="abc123xyz"
```

**Result:**
Auto-updating Instagram feed that looks amazing! 🎉

---

**Need the full setup guide?** See `INSTAGRAM_AUTO_SETUP.md`

**Ready to get your Feed ID?** Go to [behold.so](https://behold.so)
