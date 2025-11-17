# MLKs Events Website - Setup Notes

## Quick Start

This website is **ready to run**! Here's what you need to do:

### 1. Install Dependencies (Already Done!)
All npm packages are installed and ready.

### 2. Add Your Images

You need to add images to these locations in the `public/` folder:

**Hero Section:**
- `public/hero-video.mp4` - A slow-motion, elegant video (weddings, events, celebrations)
- `public/hero-poster.jpg` - A fallback poster image for the video

**About Section:**
- `public/about-image.jpg` - Professional team photo or detail shot (e.g., hands arranging flowers)

**Portfolio Section:**
Create these folders and add images:
- `public/portfolio/wedding-1.jpg` to `wedding-3.jpg` (3 wedding photos)
- `public/portfolio/corporate-1.jpg` to `corporate-3.jpg` (3 corporate event photos)
- `public/portfolio/social-1.jpg` to `social-3.jpg` (3 social celebration photos)

**Instagram Feed (Footer):**
- `public/instagram/1.jpg` to `4.jpg` (4 small square Instagram-style images)

**Image Recommendations:**
- All images should be high quality (minimum 1920px wide)
- Use elegant, professional event photography
- Maintain consistent color tones across images
- Compress images for web (use tools like TinyPNG)

### 3. Set Up Sanity CMS (Content Management)

1. **Create a Sanity account:**
   - Go to [sanity.io](https://sanity.io)
   - Sign up for a free account

2. **Create a new project:**
   - In Sanity dashboard, click "Create New Project"
   - Name it "MLKs Events"
   - Choose "Production" dataset

3. **Get your credentials:**
   - Copy your **Project ID**
   - Generate an **API Token** with Editor permissions

4. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-actual-token-here
   ```

5. **Access Sanity Studio:**
   - Run `npm run dev`
   - Go to [http://localhost:3000/studio](http://localhost:3000/studio)
   - Sign in and start adding content!

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your beautiful website!

## What's Already Built

✅ **Hero Section** - Full-screen video with elegant animations
✅ **About Section** - Unique arch-shaped image design
✅ **Services Section** - Interactive 3D flip cards
✅ **Portfolio Section** - Masonry grid with B&W to color hover
✅ **Process Timeline** - Animated 4-step journey
✅ **Testimonials Carousel** - Auto-playing with swipe support
✅ **Inquiry Form** - Complete with validation
✅ **Footer** - 4 columns with Instagram feed
✅ **Packages Page** - Three service tiers + à la carte

## Customization Tips

### Change Brand Colors
Edit `src/app/globals.css` (around line 5):
```css
--porcelain-white: #FAFAFA;
--blush-rose: #FADADD;
--champagne-gold: #D4AF37;
--deep-charcoal: #333333;
```

### Change Contact Information
Edit `src/components/sections/Footer.tsx`:
- Phone number (line ~130)
- Email address (line ~138)
- Social media links (lines ~70-95)

### Update Business Name/Year
- Footer copyright: `src/components/sections/Footer.tsx` (line ~245)
- Hero eyebrow text: `src/components/sections/Hero.tsx` (line ~32)

### Form Submission
The inquiry form currently logs to console. To connect it to your backend:
1. Open `src/components/sections/InquiryForm.tsx`
2. Find the `onSubmit` function (around line 63)
3. Replace the `setTimeout` with your API call

Example:
```typescript
const onSubmit = async (data: InquiryFormData) => {
  setIsSubmitting(true);
  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // Handle response...
  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};
```

## Testing Checklist

Before going live, test these features:

- [ ] All images load correctly
- [ ] Video plays on hero section
- [ ] All sections scroll smoothly
- [ ] Flip cards work on hover (Services)
- [ ] Portfolio images animate B&W to color
- [ ] Testimonials carousel auto-plays
- [ ] Form validation works (try submitting empty)
- [ ] Form submission success message appears
- [ ] All links work (footer, navigation)
- [ ] Responsive on mobile (test all breakpoints)
- [ ] Sanity Studio accessible at `/studio`

## Deployment to Vercel

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add MLKs Events website"
   git push
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables:**
   In Vercel project settings, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

4. **Deploy!**
   - Click deploy
   - Your site will be live in ~2 minutes

5. **Add Domain:**
   - In Vercel, go to Settings > Domains
   - Add your custom domain (e.g., mlksevents.com)

6. **Update Sanity CORS:**
   - In Sanity dashboard, go to API settings
   - Add your Vercel domain to CORS origins

## Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity Docs**: [sanity.io/docs](https://sanity.io/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Common Issues

### Build Error: Missing Environment Variables
- Make sure `.env.local` has all Sanity credentials
- For production, add them to Vercel environment variables

### Images Not Loading
- Check file paths match exactly (case-sensitive)
- Ensure images are in `public/` directory
- Verify file extensions (.jpg, .png, .mp4)

### Animations Not Working
- This is a client-side feature
- Make sure components have `"use client"` directive
- Check browser console for errors

---

**Need Help?** Check the main README.md for full documentation.

**Ready to build the best event planning website ever? Let's go! 🎉**
