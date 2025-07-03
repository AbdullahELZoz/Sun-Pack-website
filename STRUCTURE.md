# This file is only for editing file nodes, do not break the structure

/src
├── assets/          # Static resources directory, storing static files like images and fonts
│
├── components/      # Components directory
│   ├── home/       # Home page specific components
│   │   ├── CompanyOverview.tsx    # Company history and metrics component
│   │   ├── CtaSection.tsx         # Call-to-action section component
│   │   ├── FeaturedProjects.tsx   # Projects carousel with testimonials
│   │   ├── HeroSection.tsx        # Main hero banner component
│   │   ├── NewsUpdates.tsx        # News and company updates section
│   │   └── ProductCategories.tsx  # Product categories showcase
│   │
│   ├── layout/     # Layout components
│   │   ├── Footer.tsx     # Global footer component
│   │   ├── MainLayout.tsx # Main layout wrapper with navbar and footer
│   │   └── Navbar.tsx     # Global navigation bar component
│   │
│   ├── shared/     # Shared components used across pages
│   │   └── ComingSoon.tsx # Placeholder component for pages in development
│   │
│   ├── ui/         # Pre-installed shadcn/ui components, avoid modifying or rewriting unless necessary
│   └── [feature]/  # Feature module components directory, organizing custom components by feature modules
│
├── hooks/          # Custom Hooks directory
│   ├── use-mobile.ts # Pre-installed mobile detection Hook from shadcn (import { useIsMobile } from '@/hooks/use-mobile')
│   └── use-toast.ts  # Toast notification system hook for displaying toast messages (import { useToast } from '@/hooks/use-toast')
│
├── lib/            # Utility library directory
│   └── utils.ts    # Utility functions, including the cn function for merging Tailwind class names
│
├── pages/          # Page components directory, based on React Router structure
│   ├── AboutPage.tsx       # About Us page with company information, history, timeline, values, and team
│   ├── ConsumersPage.tsx   # Consumer portal with product info, bulk purchases, FAQ, and usage guides
│   ├── ContactPage.tsx     # Contact page with inquiry form, location map, and support information
│   ├── HomePage.tsx        # Home page component, serving as the main entry point of the application
│   ├── NotFoundPage.tsx    # 404 error page component, displays when users access non-existent routes
│   ├── ProductsPage.tsx    # Products catalog page with filtering, categories, and product cards
│   └── SuppliersPage.tsx   # Suppliers portal with partnership info, logistics, requirements, and application form
│
├── App.tsx         # Root component, with React Router routing system configured
│                   # Add new route configurations in this file
│                   # Includes catch-all route (*) for 404 page handling
│
├── main.tsx        # Entry file, rendering the root component and mounting to the DOM
│
├── index.css       # Global styles file, containing Tailwind configuration and custom styles
│                   # Modify theme colors and design system variables in this file 
│
└── tailwind.config.js  # Tailwind CSS v3 configuration file
                      # Contains theme customization, plugins, and content paths
                      # Includes shadcn/ui theme configuration 