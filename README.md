# Interactive Portfolio Website

A beautiful, professionally designed portfolio website with smooth animations, interactive transitions, and a dark mode aesthetic. Built with Next.js, React, and Tailwind CSS.

## Features

- **Smooth Scroll Animations**: Elements fade and slide into view as you scroll
- **Interactive Hover Effects**: Cards and buttons respond to user interactions
- **Animated Transitions**: Smooth page transitions between sections
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode Ready**: Professional dark color scheme with elegant accents
- **Performance Optimized**: Lightweight and fast-loading

## Sections

1. **Hero**: Eye-catching introduction with your name, title, and call-to-action
2. **About**: Professional bio, personal information, and skills showcase
3. **Projects**: Grid of featured projects with descriptions and tags
4. **Experience**: Timeline of work experience and education
5. **Contact**: Contact information and message form

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit `app/page.tsx` and component files to add your:
- Name and title
- Bio and skills
- Projects and experience
- Contact information

### Modify Colors

Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: oklch(0.25 0.08 240);
  --accent: oklch(0.4 0.15 200);
  /* ... more variables */
}
```

### Add More Sections

Create new component files in `components/` and import them in `app/page.tsx`

## Deployment to GitHub Pages

### 1. Create a GitHub Repository

- Create a new repository on GitHub
- Push your code to the repository

### 2. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the build and deployment source

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your site on every push to `main` branch
- Deploy to GitHub Pages
- Make it accessible at `https://<your-username>.github.io/<repository-name>`

### 4. Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── navigation.tsx      # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── projects.tsx        # Projects showcase
│   ├── experience.tsx      # Experience timeline
│   └── contact.tsx         # Contact form
├── public/                 # Static assets
├── package.json
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── .github/workflows/
    └── deploy.yml          # GitHub Actions workflow
```

## Technologies Used

- **Next.js 15**: React framework for production
- **React 19**: UI library with modern hooks
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript

## Performance Tips

1. Optimize images for web (PNG, WebP, etc.)
2. Keep animations smooth with GPU acceleration
3. Lazy load content with Intersection Observer
4. Use semantic HTML for better SEO

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Mobile

## License

This project is open source and available under the MIT License.

## Support

For issues or questions about v0, visit the [v0 documentation](https://v0.app).

---

**Happy Building! 🚀**
