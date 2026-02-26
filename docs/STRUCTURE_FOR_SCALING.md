# Project Structure – 30+ Pages ke liye Ready

Naye pages add karne ka tareeqa:

## Folder Structure

```
app/
├── layout.tsx          # Global layout (Header, Footer yahan optional)
├── page.tsx            # Home
├── sitemap.ts          # SEO – Google indexing
├── robots.ts           # SEO – Crawler rules
│
├── contact/
│   └── page.tsx        # /contact
├── about/
│   └── page.tsx        # /about
├── jobs/
│   └── page.tsx        # /jobs
│   └── [slug]/
│       └── page.tsx    # /jobs/driver-dubai
│
└── (route-group)/      # Optional: layout share karne ke liye
    ├── layout.tsx
    ├── page1/
    └── page2/

components/
├── layout/             # Header, Footer, Sidebar
├── ui/                 # Reusable buttons, cards
└── sections/           # Hero, Jobs, etc.
```

## Naya Page add karne ka flow

1. `app/naam/page.tsx` banao
2. `app/sitemap.ts` mein naya URL add karo
3. Layout/Header mein link add karo

## Sitemap mein naye pages add karna

`app/sitemap.ts` mein `urls` array expand karo:

```ts
{ url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
{ url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
```
