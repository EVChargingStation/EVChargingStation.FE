# EV Charging Station - Multi-Platform Frontend

A monorepo containing multiple frontend applications for an EV Charging Station management system, built with React Native Web, Expo, and Electron.

## Project Structure

```
evchargingstation-monorepo/
├── apps/
│   ├── web/                    # React Native Web + Vite
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── store/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── index.html
│   │
│   ├── mobile/                 # React Native + Expo
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   ├── navigation/
│   │   │   ├── store/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── assets/
│   │   ├── package.json
│   │   └── app.json
│   │
│   └── desktop/                # Electron
│       ├── src/
│       │   ├── main/           # Electron main process
│       │   ├── renderer/       # Electron renderer
│       │   └── preload/        # Electron preload
│       ├── package.json
│       └── electron-builder.json
│
├── packages/
│   ├── shared/                 # Shared code
│   │   ├── src/
│   │   │   ├── store/          # Redux store
│   │   │   ├── api/            # API services
│   │   │   ├── hooks/          # Shared hooks
│   │   │   ├── types/          # TypeScript types
│   │   │   └── utils/          # Utilities
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui/                     # Shared UI components
│       ├── src/
│       │   ├── components/     # Tamagui components
│       │   ├── styles/         # Shared styles
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── tools/                      # Build tools
├── package.json                # Root package.json
├── pnpm-workspace.yaml         # PNPM workspace config
├── turbo.json                  # Turborepo config
├── tsconfig.json               # Root TypeScript config
└── .gitignore
```

## Tech Stack

- **Package Manager**: pnpm
- **Build System**: Turborepo
- **State Management**: Redux Toolkit
- **UI Library**: Tamagui
- **Web**: React Native Web + Vite
- **Mobile**: React Native + Expo
- **Desktop**: Electron + React Native Web
- **Language**: TypeScript

## Prerequisites

- Node.js 18+
- pnpm 8+
- Git
- For mobile development: Expo CLI
- For desktop development: Electron

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development servers**:
   ```bash
   # Start all apps
   pnpm dev
   
   # Start specific app
   pnpm dev:web
   pnpm dev:mobile
   pnpm dev:desktop
   ```

3. **Build all apps**:
   ```bash
   pnpm build
   ```

## Available Scripts

- `pnpm dev` - Start all development servers
- `pnpm dev:web` - Start web app only
- `pnpm dev:mobile` - Start mobile app only
- `pnpm dev:desktop` - Start desktop app only
- `pnpm build` - Build all apps
- `pnpm build:web` - Build web app only
- `pnpm build:mobile` - Build mobile app only
- `pnpm build:desktop` - Build desktop app only
- `pnpm lint` - Lint all packages
- `pnpm test` - Run all tests
- `pnpm type-check` - Type check all packages

## Development

This monorepo uses:
- **pnpm workspaces** for package management
- **Turborepo** for build orchestration
- **TypeScript** for type safety
- **Shared packages** for common functionality

Each app can be developed independently while sharing common code through the packages.
