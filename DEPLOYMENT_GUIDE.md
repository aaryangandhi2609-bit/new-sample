# Portfolio Setup & Deployment Guide

## Quick Start Checklist

- [ ] Update your personal information
- [ ] Customize the color scheme
- [ ] Add your projects and experience
- [ ] Initialize Git repository
- [ ] Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Configure custom domain (optional)

## Step 1: Update Your Personal Information

### Edit Your Name & Title
1. Open `app/page.tsx`
2. Update the hero section with your name
3. Customize the subtitle and description

### Add Your Bio
1. Edit `components/about.tsx`
2. Update the bio text
3. Add your skills to the skills array
4. Update the bullet points with your information

### Add Your Projects
1. Edit `components/projects.tsx`
2. Replace the placeholder projects with your own
3. Add project descriptions, tags, and links

### Add Your Experience
1. Edit `components/experience.tsx`
2. Update your work experience timeline
3. Add company names, roles, dates, and accomplishments

### Add Your Contact Information
1. Edit `components/contact.tsx`
2. Update email, LinkedIn, GitHub, and Twitter links
3. Update the social media links in the footer (`app/page.tsx`)

## Step 2: Customize Colors

The portfolio uses OKLCH color space for elegant color definitions.

### Edit Color Scheme
Open `app/globals.css` and modify the CSS variables:

```css
:root {
  --primary: oklch(0.25 0.08 240);      /* Dark blue - primary brand color */
  --accent: oklch(0.4 0.15 200);        /* Bright cyan - accent color */
  /* ... other colors */
}
```

### Color Format: OKLCH(Lightness Chroma Hue)
- **Lightness**: 0 (dark) to 1 (light)
- **Chroma**: Color intensity (0 = grayscale, higher = more saturated)
- **Hue**: 0-360 (angle on the color wheel)

### Quick Color Adjustments
- Make colors darker: decrease lightness value
- Make colors brighter: increase lightness value
- Make colors more/less saturated: adjust chroma value
- Change the hue: adjust the hue angle (0=red, 120=green, 240=blue)

## Step 3: Set Up Git & GitHub

### Initialize Local Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository
3. Copy the repository URL

### Push to GitHub
```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

### Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions** from the dropdown
4. Click **Save**

### About the Deployment Workflow
The `.github/workflows/deploy.yml` file automatically:
- Installs dependencies
- Builds the Next.js site
- Exports as static HTML
- Deploys to GitHub Pages

### Your Site URL
Your portfolio will be available at:
```
https://<username>.github.io/<repository-name>
```

Example: `https://john-doe.github.io/portfolio`

## Step 5: Custom Domain (Optional)

If you own a domain and want to use it instead of GitHub Pages URL:

### Update DNS Settings
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add a CNAME record pointing to `<username>.github.io`
3. Wait for DNS propagation (5-60 minutes)

### Update GitHub Pages Settings
1. Go to your repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain name
3. Check "Enforce HTTPS"
4. Click **Save**

### Verify
Visit your custom domain to confirm it's working:
```
https://yourdomain.com
```

## Customization Tips

### Add Animations
The portfolio includes several animation utilities in `globals.css`:
- `animate-fadeIn` - Fade in effect
- `animate-slideUp` - Slide up with fade
- `animate-slideInLeft` - Slide from left
- `animate-slideInRight` - Slide from right
- `animate-scaleIn` - Scale and fade
- `animate-float` - Floating effect

Use these in components:
```jsx
<div className="animate-slideUp">Content</div>
```

### Adjust Animation Timing
In `globals.css`, modify the animation duration:
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Add New Sections
1. Create a new component in `components/`
2. Use the Intersection Observer pattern for scroll animations
3. Import and add to `app/page.tsx`

## Mobile Responsive Design

The portfolio is mobile-first with responsive breakpoints:
- `sm:` - Small devices (640px+)
- `md:` - Medium devices (768px+)
- `lg:` - Large devices (1024px+)

Test responsiveness:
```bash
npm run dev
```
Then resize your browser or use dev tools device emulation.

## Performance Optimization

### Image Optimization
- Use WebP format when possible
- Compress images before adding
- Use Next.js Image component for optimal loading

### Lighthouse Audit
1. Open your portfolio in Chrome
2. Press F12 (DevTools)
3. Click **Lighthouse** tab
4. Click **Analyze page load**
5. Review recommendations

### Common Issues
- **Large images**: Compress before uploading
- **Unused CSS**: Tailwind automatically removes unused styles
- **Font loading**: Google Fonts are optimized by default

## Troubleshooting

### GitHub Pages not showing changes
1. Wait 1-2 minutes after push
2. Hard refresh (Ctrl+Shift+R)
3. Check Actions tab to see deployment status

### Style changes not applying
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh the page
3. Verify changes were pushed to GitHub

### Build fails on GitHub Actions
1. Go to **Actions** tab in GitHub
2. Click the failed workflow
3. Scroll to see error messages
4. Fix locally and push again

## Environment Variables

This portfolio doesn't require environment variables, but if you add a backend service (like a contact form handler):

1. Create `.env.local` file
2. Add variables: `NEXT_PUBLIC_API_URL=...`
3. Access in code: `process.env.NEXT_PUBLIC_API_URL`
4. **Never commit `.env.local`** - add to `.gitignore`

## Next Steps

### Enhance Your Portfolio
- Add blog section with MDX
- Integrate with analytics (Google Analytics)
- Add dark/light mode toggle
- Add email contact form handler
- Create case studies for projects

### SEO Improvements
- Update `layout.tsx` metadata
- Add Open Graph tags
- Add structured data (schema.org)
- Submit sitemap to Google Search Console

### Additional Integrations
- Newsletter signup
- Email notifications
- Project filtering
- Search functionality

## Getting Help

- **v0 Documentation**: https://v0.app
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GitHub Pages Help**: https://docs.github.com/en/pages

---

**Deploy with confidence! Your portfolio is production-ready.** 🚀
