# Willing Box - Relationship Growth App

A hybrid PWA for couples to grow their relationships through weekly intentional actions.

## 🎯 Core Concept

**Willing Box** helps couples create deeper connections through:

- **20-item Wants Lists**: Partners create lists of behaviors they'd like to see
- **5-item Willing Lists**: Partners privately select what they're willing to work on  
- **Weekly Guessing Game**: Partners guess what the other worked on for points
- **Privacy-First Design**: Willing lists remain private to preserve autonomy

## 🏗️ Architecture

### Hybrid PWA + Native Apps
```
React PWA (Core) + Capacitor.js (Native Wrapper)
├── Web: Installable PWA with offline support
├── iOS: Native app via Capacitor  
├── Android: Native app via Capacitor
└── Single codebase for all platforms
```

### Tech Stack
- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **State**: Zustand + React Query  
- **Backend**: Firebase (Auth, Firestore, Functions)
- **Payments**: Stripe ($1/month subscription)
- **Mobile**: Capacitor.js for native features
- **Animations**: Framer Motion

## 🔐 Privacy & Scoring Rules

### Privacy Rules (CRITICAL)
- Partners **NEVER** see each other's Willing lists
- This preserves autonomy and prevents prescriptive behavior
- Only your own Willing list is visible to you

### Scoring System  
- **Guesser**: 1 point per correct guess (2 if "Most Wanted")
- **Performer**: 2 points per correct guess about them (4 if "Most Wanted")
- **Incentive**: Rewards performing behaviors over monitoring partner

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- iOS: Xcode (for iOS development)
- Android: Android Studio (for Android development)

### Development Setup

1. **Clone and Install**
```bash
git clone [repository-url]
cd willing-box-pwa
npm install
```

2. **Environment Variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your Firebase and Stripe keys
```

3. **Start Development Server**
```bash
npm run dev
```

4. **Add Mobile Platforms** (optional)
```bash
# iOS
npm run cap:add ios
npm run ios

# Android  
npm run cap:add android
npm run android
```

### Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Copy config to `.env.local`

### Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Create a product with $1/month recurring price
3. Copy publishable key to `.env.local`

## 📱 Features

### ✅ Completed
- **Hybrid PWA Foundation**: Vite + React + TypeScript
- **Core Business Logic**: Scoring engine with privacy rules
- **State Management**: Zustand stores with persistence
- **Authentication**: Firebase Auth integration
- **Subscription System**: Stripe integration ($1/month)
- **Responsive Design**: Mobile-first with safe areas
- **PWA Features**: Manifest, service worker, installable

### 🚧 In Development  
- Complete UI for all user flows
- Firebase security rules
- Backend cloud functions
- Push notifications
- Advanced analytics

## 🏃‍♂️ Usage

### User Flow
1. **Sign Up**: Create account with email/password
2. **Pair**: Invite partner via email or QR code  
3. **Create Wants**: Each partner lists 20 desired behaviors
4. **Select Willing**: Each partner privately picks 5 items to work on
5. **Weekly Cycle**: 
   - Work on chosen behaviors
   - Guess what partner worked on
   - Reveal scores
   - Repeat for new week

### Subscription Model
- **Free**: 1 Innermost (relationship pairing)
- **Premium** ($1/month): Up to 3 Innermosts + analytics

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production  
npm run preview         # Preview production build
npm run lint           # Run ESLint

# Mobile Development
npm run ios            # Build and run iOS app
npm run android        # Build and run Android app  
npm run cap:sync       # Sync web assets to mobile
npm run cap:copy       # Copy web assets only

# Production
npm run build:prod     # Full production build with linting
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - Main brand color
- **Willing**: Green (#22C55E) - Willing actions  
- **Background**: Gray-50 (#F9FAFB) - App background
- **Text**: Gray-900 (#111827) - Primary text

### Breakpoints
- **Mobile**: < 640px (primary target)
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 📊 Business Model

**Revenue**: $1/user/month subscription

**Target**: 500 paying users = $500/month break-even

**Projections**:
- 10,000 users × 20% conversion = 2,000 paid × $1 = $2,000/month
- Break-even at ~500 paying users

## 🔒 Security Features

- Firebase Authentication with security rules
- Stripe PCI-compliant payment processing  
- HTTPS everywhere (required for PWA)
- Content Security Policy headers
- XSS and CSRF protection

## 📝 License

Private - All rights reserved.

## 🤝 Contributing

This is a private project. Contact the development team for contribution guidelines.

---

**Built with ❤️ for relationship growth**
