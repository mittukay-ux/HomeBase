# HomePath - Your Complete Homebuying Guide

A modern, production-quality web application that guides users through the entire homebuying process from initial search to closing.

## 🏠 Features

### Core Pages
- **Dashboard** - Overview of your homebuying journey with stats and recent activity
- **Home Search** - Advanced search and filtering for properties
- **Saved Homes** - Track favorites with ratings and notes
- **Affordability Calculator** - Determine your budget based on income and expenses
- **Checklist** - Track progress through each homebuying stage
- **Contacts** - Manage your real estate team (agents, lenders, attorneys, inspectors)
- **Documents** - Organize and store important files
- **Notes** - Keep personal notes about each property

### Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Icons**: Lucide React
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx     # Dashboard
│   ├── search/      # Home Search
│   ├── saved/       # Saved Homes
│   ├── calculator/  # Affordability Calculator
│   ├── checklist/   # Homebuying Checklist
│   ├── contacts/    # Contacts Management
│   ├── documents/   # Documents Storage
│   ├── notes/       # Property Notes
│   ├── layout.tsx   # Root layout
│   └── globals.css  # Global styles
├── components/       # Reusable React components
│   ├── Navigation.tsx
│   ├── PropertyCard.tsx
│   ├── ChecklistItem.tsx
│   ├── ContactCard.tsx
│   └── index.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── data/            # Mock data and sample content
│   └── mock.ts
└── lib/             # Utility functions
    └── utils.ts
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Build

```bash
npm run build
npm start
```

## 📊 Data Layer

The application currently uses mock data for:
- 6 sample properties with full details
- Checklist items across 6 homebuying stages
- 3 sample contacts (Agent, Lender, Attorney)
- 5 document examples

Mock data is stored in `src/data/mock.ts` and can be easily replaced with real API calls.

## 🎨 Design System

- **Colors**: Blue-based primary palette with green, orange, and purple accents
- **Typography**: System font stack for optimal performance
- **Spacing**: Consistent 4px grid system
- **Components**: Card-based layout with consistent shadows and hover states
- **Responsive**: Mobile-first design that works on all screen sizes

## 🔧 Key Components

### Navigation
- Responsive sidebar on desktop
- Mobile hamburger menu
- Links to all 8 main pages

### PropertyCard
- Property image with hover zoom
- Save/like functionality
- Quick stats (beds, baths, sq ft)
- Quick view details button

### ChecklistItem
- Toggle completion status
- Visual progress indicators
- Due date tracking
- Description text

### ContactCard
- Role-based color coding
- Quick contact links (phone, email)
- Company information
- Notes section

## 📱 Responsive Design

- **Mobile (< 768px)**: Hamburger navigation, single column layouts
- **Tablet (768px - 1024px)**: Two column layouts where appropriate
- **Desktop (> 1024px)**: Three column layouts with fixed sidebar

## 🔮 Future Enhancements

- Real estate APIs (MLS/IDX feeds)
- AI-powered property ranking engine
- Calendar integration for open houses
- Messaging system for team communication
- Document sharing capabilities
- Email notifications for price changes
- Property comparison tools
- Mortgage calculator integration

## 📝 Code Quality

- ✅ Strong TypeScript typing throughout
- ✅ Modular, reusable components
- ✅ Clean, readable code structure
- ✅ No placeholder text or lorem ipsum
- ✅ Production-ready architecture
- ✅ ESLint configuration included
- ✅ Consistent code formatting

## 📄 License

This project is part of the HomeBase repository.

---

**Version**: 0.1.0  
**Last Updated**: June 2026
