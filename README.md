# Atharv Amey Dhore - Portfolio

A modern, production-ready personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean, responsive UI with smooth animations
- 🌙 **Dark/Light Mode** - Theme toggle with system preference detection and localStorage persistence
- 🎆 **Interactive Profile Photo** - Click the profile image for a fireworks celebration (respects `prefers-reduced-motion`)
- 📝 **Guestbook** - Visitors can sign the guestbook with name, email, and optional message
- 🔐 **Admin Dashboard** - Password-protected admin page to view and download guestbook entries
- ♿ **Accessible** - ARIA labels, keyboard navigation, good contrast, and reduced-motion support
- ⚡ **Optimized** - Next.js Image optimization, Tailwind CSS purging, minimal JS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Storage**: Vercel KV (Redis)
- **Animations**: canvas-confetti
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnishD4/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your profile image:
   - Place your profile photo at `public/anish.png`
   - Ensure `public/favicon.ico` exists

4. Set up environment variables (optional for local dev):
```bash
# Create .env.local file
ADMIN_PASSWORD=your-secure-admin-password
KV_URL=your-vercel-kv-url
KV_REST_API_URL=your-vercel-kv-rest-api-url
KV_REST_API_TOKEN=your-vercel-kv-rest-api-token
KV_REST_API_READ_ONLY_TOKEN=your-vercel-kv-read-only-token
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ADMIN_PASSWORD` | Password to access the admin dashboard | Yes (for admin features) |
| `KV_URL` | Vercel KV connection URL | Yes (for production) |
| `KV_REST_API_URL` | Vercel KV REST API URL | Yes (for production) |
| `KV_REST_API_TOKEN` | Vercel KV REST API token | Yes (for production) |
| `KV_REST_API_READ_ONLY_TOKEN` | Vercel KV read-only token | Yes (for production) |

## Deploying to Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Import the project in [Vercel](https://vercel.com/new)

3. Add the environment variables in Vercel project settings:
   - Go to Settings → Environment Variables
   - Add `ADMIN_PASSWORD` with a strong password
   - Set up Vercel KV:
     - Go to Storage → Create Database → KV
     - The KV environment variables will be automatically added

4. Deploy! Vercel will automatically build and deploy your site.

## Project Structure

```
├── app/
│   ├── admin/
│   │   └── guestbook/
│   │       └── page.tsx       # Admin guestbook page
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── guestbook/
│   │   │       ├── route.ts
│   │   │       └── download/route.ts
│   │   └── guestbook/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Activities.tsx
│   │   ├── Honors.tsx
│   │   └── Contact.tsx
│   ├── ThemeProvider.tsx
│   └── ui/
│       └── Fireworks.tsx
├── public/
│   ├── anish.png              # Profile photo
│   └── favicon.ico
├── tailwind.config.ts
└── package.json
```

## Admin Dashboard

Access the admin dashboard at `/admin/guestbook`:

1. Enter the `ADMIN_PASSWORD` to log in
2. View all guestbook submissions (name, email, message, date, IP)
3. Download all entries as CSV

## Guestbook Features

- **Rate Limiting**: 5 submissions per IP per hour
- **Honeypot Field**: Hidden field to catch bots
- **Server-side Validation**: Name (1-50 chars), valid email, message (max 500 chars)
- **Privacy**: Emails and IPs are not publicly displayed

## Accessibility

- Keyboard navigation for all interactive elements
- ARIA labels for buttons and navigation
- `prefers-reduced-motion` support (disables fireworks animation)
- Semantic HTML structure
- Good color contrast in both light and dark modes

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this as a template for your own portfolio!

## Author

**Atharv Amey Dhore**
- Email: anish.dhore@gmail.com
- GitHub: [@AnishD4](https://github.com/AnishD4)

