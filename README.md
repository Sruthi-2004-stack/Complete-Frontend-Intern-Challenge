# Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Supabase
- Tailwind CSS
- Framer Motion
- Lucide React

## Features

- Dark mode Bento Grid Dashboard
- Dynamic course cards fetched from Supabase
- Animated progress bars
- Hero section with learning streak
- Activity graph
- Responsive sidebar and mobile navigation
- Loading skeletons
- Error handling

## Architecture

### Server Components

- `app/page.tsx`
- Fetches course data securely from Supabase.

### Client Components

Used for interactive UI:

- Sidebar
- CourseCard
- ProgressBar
- ActivityTile

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Deployment

Deploy using Vercel.

Add these environment variables in Vercel:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY