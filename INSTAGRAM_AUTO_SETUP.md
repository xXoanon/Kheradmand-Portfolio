# Auto-Updating Instagram Feed Setup

## 🎯 Goal
Get Instagram posts to automatically update on your website without manual maintenance.

## ✅ Best Solution: Behold

**Why Behold?**
- ✅ Automatically updates when you post on Instagram
- ✅ Beautiful, customizable design
- ✅ Dark mode support
- ✅ No coding required
- ✅ Free tier available
- ✅ Fast loading
- ✅ Responsive

## 🚀 Setup (10 Minutes)

### Step 1: Create Behold Account

1. Go to [behold.so](https://behold.so)
2. Click "Get Started Free"
3. Sign up with email

### Step 2: Connect Instagram

1. Click "Add Source"
2. Select "Instagram"
3. Choose connection method:
   - **Personal Account**: Connect directly
   - **Business Account**: Connect via Facebook
4. Authorize Behold to access your Instagram
5. Select @h.krn_ account

### Step 3: Create Feed Widget

1. Click "Create Feed"
2. Choose layout: **Grid**
3. Configure settings:

**Layout Settings:**
```
Layout: Grid
Columns: 3 (desktop), 2 (tablet), 1 (mobile)
Posts to show: 6-9
Spacing: Medium (16px)
```

**Design Settings:**
```
Theme: Dark
Background: Transparent
Border radius: 12px
Hover effect: Scale + Fade
Show captions: Optional
Show likes/comments: Optional
```

**Advanced:**
```
Lazy loading: Enabled
Image quality: High
Cache: Enabled
```

### Step 4: Get Your Feed ID

1. After creating the feed, you'll see a code snippet
2. Look for: `data-behold-id="YOUR_FEED_ID"`
3. Copy the ID (looks like: `abc123xyz`)

### Step 5: Add to Website

1. Open `components/InstagramSection.tsx`
2. Find line: `data-behold-id="YOUR_FEED_ID"`
3. Replace `YOUR_FEED_ID` with your actual ID
4. Save the file

**Example:**
```jsx
<figure data-behold-id="abc123xyz" />
```

### Step 6: Test

1. Refresh your website
2. Wait 2-3 seconds for feed to load
3. You should see your latest Instagram posts
4. Done! 🎉

## 🎨 Customization

### Match Dark Theme

The widget is already styled to match your dark theme. If you want to adjust:

**In Behold Dashboard:**
- Background: `#000000` (black)
- Text color: `#FFFFFF` (white)
- Border radius: `12px`
- Hover effect: Scale 1.05

**In Code:**
The CSS at the bottom of `InstagramSection.tsx` handles:
- Rounded corners
- Hover effects
- Dark mode compatibility

### Change Number of Posts

In Behold dashboard:
- 6 posts: Clean, minimal
- 9 posts: More content
- 12 posts: Full gallery

### Change Layout

**Grid (Current):**
- Best for photos
- Clean, organized
- Recommended ✅

**Carousel:**
- Slideshow style
- Good for featured work

**Wall:**
- Pinterest-style
- Mixed sizes

## 💰 Pricing

**Free Plan:**
- Up to 500 loads/month
- Behold branding (small)
- Perfect for starting out

**Pro Plan ($10/month):**
- Unlimited loads
- No branding
- Priority support
- Advanced customization

**For Hosein:** Start with free, upgrade if needed.

## 🔄 How Auto-Update Works

1. You post on Instagram
2. Behold detects new post (within 1 hour)
3. Feed automatically updates on your website
4. No action needed from you! ✨

## 🎯 Alternative Options

### Option 2: Elfsight (Similar to Behold)

**Pros:**
- Easy setup
- Good customization
- Auto-updates

**Cons:**
- More expensive ($5-15/month)
- Larger branding on free tier

**Setup:**
1. Go to [elfsight.com/instagram-feed](https://elfsight.com/instagram-feed-instashow/)
2. Create widget
3. Get embed code
4. Replace Behold code with Elfsight code

### Option 3: Instagram Basic Display API (Advanced)

**Pros:**
- Free forever
- Full control
- No third-party

**Cons:**
- Requires coding
- Token expires every 60 days
- More maintenance

**Not recommended** unless you're comfortable with APIs.

## 🎨 Styling Tips

### Make It Seamless

The current implementation already:
- ✅ Matches dark theme
- ✅ Uses rounded corners (12px)
- ✅ Has hover effects
- ✅ Responsive grid
- ✅ Fast loading

### Additional Customization

**Add overlay on hover:**
```css
figure[data-behold-id] a:hover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}
```

**Change hover effect:**
```css
figure[data-behold-id] a:hover img {
  transform: scale(1.1) !important;
  filter: brightness(0.8) !important;
}
```

## 📱 Mobile Optimization

Behold automatically handles:
- Responsive grid (3 → 2 → 1 columns)
- Touch-friendly
- Fast loading on mobile
- Lazy loading images

## 🔧 Troubleshooting

### Feed Not Loading?

**Check:**
1. Feed ID is correct
2. Instagram account is connected in Behold
3. Account is public (or properly authorized)
4. Internet connection is working
5. No ad-blocker interfering

**Solution:**
- Check browser console (F12) for errors
- Verify Feed ID in Behold dashboard
- Try incognito mode
- Contact Behold support

### Posts Not Updating?

**Behold updates every:**
- Free plan: Every 1-2 hours
- Pro plan: Every 15-30 minutes

**Force update:**
- Go to Behold dashboard
- Click "Refresh Feed"
- Wait 1-2 minutes

### Styling Issues?

**If widget doesn't match theme:**
1. Check Behold dashboard settings
2. Verify dark theme is selected
3. Adjust CSS in `InstagramSection.tsx`
4. Clear browser cache

## ✨ Pro Tips

1. **Post Regularly**: Keep feed fresh (2-3 times/week)
2. **High Quality**: Only post your best work
3. **Consistent Style**: Maintain visual consistency
4. **Engage**: Respond to comments on Instagram
5. **Stories**: Use stories for BTS content

## 📊 Analytics

Behold provides:
- Click tracking
- Impression counts
- Popular posts
- Engagement metrics

Access in Behold dashboard → Analytics

## 🎯 Best Practices

### Content Strategy
- Mix photos and videos
- Show variety of work
- Include BTS content
- Highlight client work
- Share process/techniques

### Posting Schedule
- Consistency > Frequency
- 2-3 posts per week ideal
- Best times: 9am, 12pm, 6pm (local time)

### Engagement
- Use relevant hashtags
- Tag locations (Istanbul)
- Engage with followers
- Collaborate with others

## 🚀 Launch Checklist

- [ ] Create Behold account
- [ ] Connect Instagram (@h.krn_)
- [ ] Create feed widget
- [ ] Configure dark theme
- [ ] Get Feed ID
- [ ] Update code with Feed ID
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Verify auto-updates work
- [ ] Check loading speed

## 📞 Support

**Behold Support:**
- Email: support@behold.so
- Docs: behold.so/docs
- Response time: 24-48 hours

**Common Issues:**
- [Behold FAQ](https://behold.so/faq)
- [Setup Guide](https://behold.so/setup)

## 🎉 After Setup

Once configured:
1. ✅ Feed updates automatically
2. ✅ No maintenance needed
3. ✅ Just post on Instagram normally
4. ✅ Website stays fresh

**Time Investment:**
- Initial setup: 10 minutes
- Ongoing: 0 minutes (automatic!)

---

**Recommended:** Use Behold for the best balance of ease, features, and cost.

**Current Status:** Code is ready, just need to add your Behold Feed ID!
