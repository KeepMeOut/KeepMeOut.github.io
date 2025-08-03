# 📱 Keep Me Out - Official Website

<div align="center">

![Keep Me Out Logo](./public/assets/logos/logo_icon.svg)

**Take Control of Your Digital Life**

*Lock your phone to focus, study, and reconnect with what truly matters.*

[![Live Website](https://img.shields.io/badge/🌐_Live_Site-keepmeout.github.io-blue?style=for-the-badge)](https://keepmeout.github.io/)
[![Download](https://img.shields.io/badge/📱_Download-Google_Play-green?style=for-the-badge)](https://play.google.com/store/apps/details?id=vikesh.dass.lockmeout)
[![Built with Next.js](https://img.shields.io/badge/⚡_Built_with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

</div>

---

## 🚀 About Keep Me Out

Keep Me Out is a powerful digital wellbeing app designed to help you break free from phone addiction and regain control over your time. Our official website showcases the app's features and provides essential information for users.

### ✨ Key Features

- 🔒 **Quick Lock** - Instant phone locking in just two steps
- ⏰ **Schedule Lock** - Plan your digital detox with 7-day cycles  
- 🚨 **Emergency Calling** - Stay connected to important contacts
- 📊 **App Usage Tracking** - Monitor your digital habits
- 🛡️ **Privacy-First Design** - Your data stays on your device

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom React components with Framer Motion
- **Type Safety**: TypeScript
- **Deployment**: GitHub Pages with automated CI/CD
- **Testing**: Jest + React Testing Library

---

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/KeepMeOut/KeepMeOut.github.io.git
cd KeepMeOut.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
npm test             # Run Jest tests
```

---

## 🚀 Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions:

- **Live URL**: https://keepmeout.github.io/
- **Trigger**: Push to `master` branch
- **Build**: Next.js static export
- **Hosting**: GitHub Pages with custom domain support

### Deployment Workflow

1. Code pushed to `master` branch
2. GitHub Actions builds Next.js app
3. Static files exported to `gh-pages` branch
4. GitHub Pages serves the updated site

---

## 🧪 Testing

We use Jest and React Testing Library for comprehensive testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

---

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── help/           # Help page
│   └── privacy/        # Privacy page
├── components/         # Reusable React components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── config/             # Configuration files
├── constants/          # App constants
├── data/               # Static data
├── types/              # TypeScript types
└── utils/              # Utility functions
```

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

### Development Guidelines

1. Follow the existing code style and conventions
2. Write tests for new features
3. Ensure TypeScript types are properly defined
4. Test your changes locally before submitting

---

## 📞 Support & Contact

- **Email**: [kmo-support@googlegroups.com](mailto:kmo-support@googlegroups.com)
- **Help Center**: [keepmeout.github.io/help](https://keepmeout.github.io/help)
- **Privacy Policy**: [keepmeout.github.io/privacy](https://keepmeout.github.io/privacy)

---

## 📄 License

© 2025 Keep Me Out by Vikesh Dass. All rights reserved.

---

<div align="center">

**Built with ❤️ for digital wellbeing**

[🏠 Visit Website](https://keepmeout.github.io/) • [📱 Download App](https://play.google.com/store/apps/details?id=vikesh.dass.lockmeout) • [💬 Get Support](mailto:kmo-support@googlegroups.com)

</div>