# Instagram Feed Setup Guide

This guide will help you add a real Instagram feed to the portfolio website.

## Quick Options (Easiest to Hardest)

### 🟢 Option 1: Elfsight Widget (Recommended - No Coding)

**Pros**: Easy, no coding, free tier available
**Cons**: Branding on free tier

1. Go to [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/)
2. Click "Create Widget"
3. Connect your Instagram account
4. Customize the appearance (grid layout, 6 posts)
5. Copy the embed code
6. Open `components/InstagramSection.tsx`
7. Replace the placeholder grid section with the Elfsight embed code

```jsx
// Replace the grid div with:
<div dangerouslySetInnerHTML={{ __html: 'YOUR_ELFSIGHT_CODE_HERE' }} />
```

### 🟡 Option 2: SnapWidget (Free, Simple)

**Pros**: Free, clean, easy
**Cons**: Limited customization

1. Go to [SnapWidget](https://snapwidget.com/widgets/instagram-grid)
2. Enter Instagram username: `h.krn_`
3. Customize layout (3 columns, 6 posts)
4. Get embed code
5. Add to `components/InstagramSection.tsx`

### 🟡 Option 3: Behold (Modern, Clean)

**Pros**: Beautiful, modern design
**Cons**: Paid after trial

1. Go to [Behold](https://behold.so/)
2. Sign up and connect Instagram
3. Create a feed widget
4. Copy embed code
5. Add to your component

### 🔴 Option 4: Instagram Basic Display API (Advanced)

**Pros**: Full control, no third-party
**Cons**: Requires coding, API setup

#### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Instagram Basic Display" product
4. Configure OAuth redirect URIs

#### Step 2: Get Access Token

1. In your app settings, get your Instagram App ID and App Secret
2. Generate a User Token
3. Exchange for Long-Lived Token (60 days)

#### Step 3: Create API Route

Create `app/api/instagram/route.ts`:

```typescript
export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return Response.json(data);
}
```

#### Step 4: Update Component

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function InstagramSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/instagram')
      .then(res => res.json())
      .then(data => setPosts(data.data.slice(0, 6)));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {posts.map((post: any) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={post.media_url} 
            alt={post.caption}
            className="aspect-square object-cover rounded-lg"
          />
        </a>
      ))}
    </div>
  );
}
```

#### Step 5: Environment Variables

Add to `.env.local`:

```
INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
```

## Recommended Approach

For Hosein's portfolio, I recommend **Option 1 (Elfsight)** or **Option 2 (SnapWidget)** because:

1. ✅ No coding required
2. ✅ Automatic updates when new posts are added
3. ✅ Works immediately
4. ✅ Mobile responsive
5. ✅ Free tier available

## Alternative: Just Link to Instagram

If you prefer to keep it simple and drive traffic directly to Instagram:

The current implementation already has a beautiful Instagram profile card with a direct link. This is actually a great strategy because:

- Increases Instagram followers
- Shows Instagram engagement metrics
- No API maintenance needed
- Always up to date
- Mobile-friendly

## Need Help?

If you need assistance setting up any of these options, feel free to reach out or check the documentation for each service.

---

**Current Status**: The site has a beautiful Instagram profile card with placeholder posts. Click any post to go directly to Instagram.
