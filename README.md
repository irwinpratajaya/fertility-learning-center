# Fertility Learning Center

A modern educational platform focused on fertility education and awareness. Built with Next.js 15, TypeScript, and Tailwind CSS.

🔗 **[Live Demo](https://fertility-learning-center.vercel.app/)**

## Tech Stack

- **Framework:** Next.js 15.1.6
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/                 # Next.js 15 App Router pages
│   ├── page.tsx        # Home page
│   └── courses/        # Course-related pages
│       └── [slug]/     # Dynamic course pages
├── components/         # Reusable UI components
│   ├── CourseCard     # Course display card
│   ├── ExpertCard     # Expert profile card
│   ├── Footer         # Site footer
│   ├── Header         # Site header
│   ├── LessonCard     # Lesson display card
│   └── TopicCard      # Topic display card
├── data/              # Data management
│   ├── courses        # Course information
│   └── experts        # Expert profiles
└── utils/             # Utility functions
    ├── duration       # Time formatting
    └── format         # Data formatting
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/irwinpratajaya/fertility-learning-center.git
cd fertility-learning-center
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deployed on Vercel](https://vercel.com/button)](https://fertility-learning-center.vercel.app/)
