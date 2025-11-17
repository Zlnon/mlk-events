# MLKs Events - Bespoke Wedding & Event Planning Website

A stunning, luxury event planning website built with Next.js 16, featuring elegant animations, interactive components, and a sophisticated brand identity.

## 🎨 Brand Identity

### Color Palette
- **Porcelain White**: `#FAFAFA` - Main background
- **Blush Rose**: `#FADADD` - Accents and buttons
- **Champagne Gold**: `#D4AF37` - Borders, headings, key accents
- **Deep Charcoal**: `#333333` - Body text

### Typography
- **Headings (Serif)**: Playfair Display
- **Body (Sans-Serif)**: Montserrat
- **Script (Accent)**: Great Vibes

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components (shadcn/ui-style)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **CMS**: Sanity.io (Headless CMS)
- **Deployment**: Vercel

## 📁 Project Structure

```
mlk-events/
├── public/
│   ├── portfolio/          # Portfolio images (wedding-1.jpg, etc.)
│   ├── instagram/          # Instagram feed images (1.jpg - 4.jpg)
│   ├── hero-video.mp4      # Hero section background video
│   ├── hero-poster.jpg     # Video poster/fallback image
│   └── about-image.jpg     # About section image
├── sanity/
│   ├── lib/
│   │   ├── client.ts       # Sanity client configuration
│   │   └── image.ts        # Image URL builder
│   └── schemas/
│       ├── portfolio.ts    # Portfolio content type
│       ├── testimonial.ts  # Testimonial content type
│       └── service.ts      # Service content type
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx        # Homepage with all sections
│   │   ├── packages/       # Service packages page
│   │   └── studio/         # Sanity Studio CMS interface
│   ├── components/
│   │   ├── sections/       # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── InquiryForm.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # Reusable UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts        # Utility functions
└── sanity.config.ts        # Sanity configuration
```

## 🎯 Key Features

### 1. Cinematic Hero Section
- Full-screen video background with fallback gradient
- Smooth fade-in animations
- Scroll indicator with bounce animation
- CTA button with elegant hover effects

### 2. About Us Section
- Unique arch-shaped image container
- Layered design with blush rose accent circle
- Animated signature element
- Responsive split-screen layout

### 3. Interactive Services Section
- 3D flip card animations on hover
- Three service categories: Weddings, Social, Corporate
- Gradient background with decorative elements
- Detailed feature lists on card backs

### 4. Portfolio Masonry Grid
- Pinterest-style layout
- Black & white to color transition on hover
- Animated gold border reveal
- Responsive columns (1, 2, or 3 based on screen size)

### 5. Process Timeline
- Four-step journey visualization
- Animated connecting line on scroll
- Icon-based step indicators
- Staggered fade-in animations

### 6. Testimonials Carousel
- Auto-playing slider with manual controls
- Swipe gesture support (drag to navigate)
- Giant decorative quote mark background
- Smooth transitions with Framer Motion

### 7. Inquiry Form
- React Hook Form with Zod validation
- Real-time error messages
- Success state feedback
- Comprehensive client questionnaire

### 8. Footer
- Four-column layout
- Newsletter subscription
- Instagram feed integration placeholder
- Contact information and navigation

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- A Sanity.io account (for CMS)

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**

   The `.env.local` file is already created. Update it with your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

   To get your Sanity credentials:
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Create a new project or select existing
   - Copy your Project ID
   - Generate an API token with Editor permissions

3. **Add placeholder images**

   You'll need to add the following images to the `public/` directory:
   - `hero-video.mp4` - Background video for hero section
   - `hero-poster.jpg` - Poster image for video
   - `about-image.jpg` - Image for about section
   - `portfolio/wedding-1.jpg` through `wedding-3.jpg`
   - `portfolio/corporate-1.jpg` through `corporate-3.jpg`
   - `portfolio/social-1.jpg` through `social-3.jpg`
   - `instagram/1.jpg` through `4.jpg`

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Access Sanity Studio**

   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the CMS.

## 📝 Content Management

### Using Sanity Studio

1. Navigate to `/studio` in your browser
2. Sign in with your Sanity account
3. Add content for:
   - **Portfolio**: Event showcases with images
   - **Testimonials**: Client reviews and quotes
   - **Services**: Service descriptions and features

## 🎨 Customization

### Colors
Edit `src/app/globals.css` to modify the brand colors:
```css
:root {
  --porcelain-white: #FAFAFA;
  --blush-rose: #FADADD;
  --champagne-gold: #D4AF37;
  --deep-charcoal: #333333;
}
```

### Typography
Google Fonts are loaded in `globals.css`. To change fonts, update the `@import` URL and CSS variables.

## 🚀 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy MLKs Events website"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy!

3. **Environment Variables**
   Add these in your Vercel project settings:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

## 📱 Responsive Design

Fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Lint code
```

## 📄 License

Copyright © 2025 MLKs Events. All rights reserved.

---

**Built with ❤️ using Next.js 16 and modern web technologies**
