# Tanksley Automotive Website

Professional website for Tanksley Automotive - Family-owned auto repair shop in Greenwell Springs, LA since 1996.

## Features

- **Responsive Design**: Mobile-first, works beautifully on all devices
- **13 Pages**: Homepage, 6 service pages, About, Reviews, FAQ, Contact, Schedule
- **SEO Optimized**: Metadata, semantic HTML, local keywords
- **Modern Stack**: Next.js 15, React 19, Tailwind CSS 4
- **Fast Performance**: Static site generation, optimized images
- **Contact Forms**: Schedule appointment and general contact forms
- **Google Maps Integration**: Location map on contact page

## Pages

1. **Homepage** - Hero, services grid, testimonials, why choose us, location map
2. **About Us** - Company story, team, certifications, values
3. **Services Pages** (6):
   - Transmission Repair (Jasper Certified)
   - Air Conditioning Repair
   - Brake Service
   - Engine Diagnostics
   - Suspension & Alignment
   - General Maintenance
4. **Reviews** - Customer testimonials and ratings
5. **FAQ** - Frequently asked questions
6. **Contact** - Contact form and map
7. **Schedule Appointment** - Online booking form

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (recommended)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Configure custom domain: tanksleyautomotive.com

## Configuration Needed

Before going live, update these items:

1. **Phone Number**: Replace `+12252613866` with actual phone throughout site
2. **Address**: Update full street address in Contact and Footer
3. **Google Maps**: Update iframe `src` with correct location coordinates
4. **Email**: Configure contact form to send to actual email (requires backend API)
5. **Booking System**: Integrate with Calendly or similar (optional)
6. **Analytics**: Add Google Analytics tracking code
7. **Images**: Replace placeholder content with actual photos of shop and team

## Brand Colors

- **Primary Blue**: #003366 (trust, professionalism)
- **Accent Red**: #DC143C (energy, automotive)
- **Gold**: #FFC107 (CTAs, attention)

## SEO Keywords

- auto repair Greenwell Springs
- mechanic Central Louisiana
- car repair 70739
- transmission repair Greenwell Springs
- Jasper certified mechanic Louisiana

## License

© 2026 Tanksley Automotive, LLC. All rights reserved.
