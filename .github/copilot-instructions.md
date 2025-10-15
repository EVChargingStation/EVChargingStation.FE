# GitHub Copilot Instructions - EV Charging Station Frontend

## Project Overview
This is the frontend application for the EV Charging Station project, built with React, TypeScript, and TailwindCSS. The project follows modern React patterns with Redux Toolkit for state management.

### MVP Scope & Minimalist Design
This is an MVP (Minimum Viable Product) for a 2-person development team with a 4-6 week timeline. The design philosophy emphasizes **minimalism and simplicity** over complex features:

- **Target Users**: EV Drivers and Admin only (no station staff role)
- **Design Philosophy**: Clean, minimalist interface focusing on core functionality
- **UI Priority**: Functionality over aesthetics, simple over complex
- **Key Features**: User management, station management, charging sessions, basic payments

## MVP Features & User Roles

### Target Users (2 Roles Only)
1. **EV Driver** - End users who charge their electric vehicles
2. **Admin** - System administrators with full access (includes station staff functionality)

### Core Features to Implement

#### EV Driver Interface
- **Authentication**
  - Simple login/register (email only)
  - Basic profile management (personal info, vehicle type)

- **Station Management (Simplified)**
  - View charging stations in **list view** (no map integration)
  - View station details (location, status, connector types)
  - Start/stop charging sessions via QR code

- **Payment & History**
  - Basic payment tracking (kWh-based pricing only)
  - View transaction history
  - Simple electronic receipts

#### Admin Interface
- **Station Management**
  - Add/edit/remove stations and charging points
  - View station status dashboard (online/offline)

- **User Management**
  - Basic user CRUD operations
  - User list with search/filter

- **Simple Reporting**
  - Basic revenue reports by station
  - Usage frequency reports

### Excluded Features (Keep MVP Simple)
- Map-based station view (use simple list instead)
- Time-based pricing (use kWh pricing only)
- Payment gateway integration (simulate payments)
- Remote activation/deactivation of charging points
- Complex analytics and reporting
- Business customer accounts
- Monthly cost reporting
- Charging habit analytics

### Core Entities
- **User** (EV Driver/Admin)
- **Station** (Charging locations)
- **Connector** (Charging points)
- **Session** (Charging sessions)
- **Payment** (Transaction records)

## Technology Stack
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Strict typing for better code quality
- **TailwindCSS** - Utility-first CSS framework
- **Redux Toolkit** - State management with modern Redux patterns
- **Vite** - Fast build tool and development server

## Code Style and Structure

### General Principles
- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)
- Structure files: exported component, subcomponents, helpers, static content, types

### File Organization
```
src/
├── components/          # Reusable UI components (minimal, functional)
│   ├── ui/             # Basic UI elements (buttons, inputs, cards)
│   ├── layout/         # Layout components (header, sidebar, footer)
│   └── common/         # Shared components
├── pages/              # Main application pages
│   ├── auth/           # Login, register pages
│   ├── dashboard/      # Driver/Admin dashboards
│   ├── stations/       # Station list and details
│   ├── sessions/       # Charging session management
│   └── profile/        # User profile management
├── store/              # Redux store configuration
├── features/           # Feature-based Redux slices
│   ├── auth/           # Authentication state
│   ├── stations/       # Station management state
│   ├── sessions/       # Charging session state
│   └── users/          # User management state
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── services/           # API service functions
└── assets/             # Static assets (minimal icons, logos)
```

## Naming Conventions

### Directories and Files
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)
- Use PascalCase for component files (e.g., `AuthWizard.tsx`)
- Use camelCase for utility files (e.g., `apiHelpers.ts`)
- Favor named exports for components

### Components and Variables
- Use PascalCase for component names
- Use camelCase for function and variable names
- Use descriptive names with auxiliary verbs for boolean variables
- Use UPPER_SNAKE_CASE for constants

## TypeScript Guidelines

### Type Usage
- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use const objects or unions instead
- Use functional components with TypeScript interfaces
- Enable strict mode in TypeScript for better type safety
- Implement proper TypeScript interfaces for props and state

### Component Types
```typescript
// Preferred component structure
interface ComponentProps {
  title: string;
  isLoading?: boolean;
  onAction: (id: string) => void;
}

const Component: React.FC<ComponentProps> = ({ title, isLoading = false, onAction }) => {
  // Component implementation
};

export default Component;
```

## React Best Practices

### Component Guidelines
- Use React.FC for functional components with props
- Prefer functional components over class components
- Use React.memo for performance optimization when needed
- Implement custom hooks for reusable logic
- Use React.lazy and Suspense for code-splitting

### Hooks Usage
- Use useState only for local component state
- Minimize the use of useState and useEffect
- Use useCallback and useMemo for performance optimization
- Create custom hooks for complex logic that can be reused

### Error Handling
- Implement error boundaries for robust error handling
- Use try-catch blocks for async operations
- Provide meaningful error messages to users

## State Management with Redux Toolkit

### Store Structure
- Use Redux Toolkit for all global state management
- Create feature-based slices, not component-based
- Keep Redux state normalized and flat
- Avoid putting non-serializable data in Redux state

### Redux Patterns
```typescript
// Use createSlice for reducers and actions
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Use createAsyncThunk for async operations
const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: string) => {
    const response = await api.getUser(userId);
    return response.data;
  }
);

// Use createSelector for memoized selectors
const selectUserInfo = createSelector(
  (state: RootState) => state.user,
  (user) => ({
    name: user.name,
    email: user.email,
  })
);
```

### Redux TypeScript Integration
- Use typed Redux hooks (`useAppDispatch`, `useAppSelector`)
- Implement proper Redux TypeScript types
- Use Redux DevTools for debugging
- Implement proper error handling in Redux actions

## Performance Optimization

### General Performance
- Optimize images: use WebP format where supported
- Implement lazy loading for images and components
- Use code splitting with React.Suspense
- Avoid unnecessary re-renders by memoizing components

### Bundle Optimization
- Profile and monitor performance using Vite's built-in tools
- Implement tree shaking for unused code
- Use dynamic imports for large dependencies
- Optimize TailwindCSS by purging unused styles

## Styling with TailwindCSS - Minimalist MVP Design

### Design Principles
- **Minimalism First**: Clean, uncluttered interfaces with plenty of whitespace
- **Functionality Over Form**: Prioritize usability and clear information hierarchy
- **Limited Color Palette**: Use 2-3 primary colors maximum (typically gray, blue, green for charging status)
- **Simple Typography**: Use 2 font weights max (normal, semibold), consistent font sizes
- **No Complex Animations**: Simple hover states and basic transitions only

### TailwindCSS Usage for MVP
```typescript
// Minimalist color palette
const colors = {
  // Primary palette (keep it simple)
  primary: {
    50: '#eff6ff',    // Very light blue
    500: '#3b82f6',   // Primary blue
    600: '#2563eb',   // Darker blue for hovers
  },
  // Status colors (minimal set)
  success: '#10b981', // Green for available/success
  warning: '#f59e0b', // Orange for busy/warning  
  error: '#ef4444',   // Red for offline/error
  // Grayscale (primary colors for MVP)
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    300: '#d1d5db',
    500: '#6b7280',
    700: '#374151',
    900: '#111827',
  }
};

// Simple component styling patterns
const buttonStyles = {
  base: "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-500",
  danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
};

const cardStyles = {
  base: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
  interactive: "bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer",
};

const inputStyles = {
  base: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",
  error: "block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",
};
```

### MVP Layout Patterns
```typescript
// Simple page layout
const PageLayout: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 py-6">{title}</h1>
      </div>
    </header>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </main>
  </div>
);

// Simple card grid for stations
const StationGrid: React.FC<{ stations: Station[] }> = ({ stations }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {stations.map(station => (
      <div key={station.id} className={cardStyles.interactive}>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{station.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{station.address}</p>
        <div className="flex items-center justify-between">
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(station.status)}`}>
            {station.status}
          </span>
          <span className="text-sm text-gray-500">{station.availableConnectors} available</span>
        </div>
      </div>
    ))}
  </div>
);
```

### Responsive Design (Mobile-First MVP)
```typescript
// Simple responsive breakpoints
const responsiveClasses = {
  container: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6",
  text: {
    title: "text-xl sm:text-2xl lg:text-3xl font-semibold",
    body: "text-sm sm:text-base",
  },
  spacing: "space-y-4 sm:space-y-6 lg:space-y-8",
};
```

### CSS Organization
- Use utility classes for styling (avoid custom CSS where possible)
- Create component classes only for repeated patterns
- Keep styles simple and functional
- Use consistent spacing scale (4, 8, 16, 24, 32px via Tailwind)
- Implement basic responsive design (mobile-first)

## API Integration

### HTTP Requests
- Use async/await for all async operations
- Implement proper error handling for API calls
- Use TypeScript interfaces for API responses
- Create reusable API service functions

### Data Fetching
```typescript
// Preferred API service structure
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

const apiService = {
  async getUsers(): Promise<ApiResponse<User[]>> {
    try {
      const response = await fetch('/api/users');
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  },
};
```

## Code Quality

### Linting and Formatting
- Use ESLint with TypeScript and React plugins
- Use Prettier for consistent code formatting
- Follow React and TypeScript best practices
- Implement pre-commit hooks for code quality

### Testing
- Write unit tests for utility functions
- Write integration tests for components
- Use React Testing Library for component testing
- Maintain good test coverage

## Security Considerations

### Data Handling
- Store sensitive data securely, not in Redux state
- Validate all user inputs
- Sanitize data before rendering
- Use HTTPS for all API communications

### Authentication
- Implement proper authentication flow
- Store tokens securely
- Handle token expiration gracefully
- Implement proper logout functionality

## Development Workflow

## Development Workflow

### MVP Development Priorities (4-6 Week Timeline)

#### Phase 1 (Week 1-2): Foundation & Authentication
- Setup project structure with minimalist design system
- Implement basic authentication (login/register)
- Create simple layout components (header, sidebar, basic navigation)
- Setup Redux store for auth state
- Basic user profile page

#### Phase 2 (Week 3-4): Core Features
- Station list view (simple table/card layout)
- Station details page
- Charging session management
- Basic payment simulation
- Admin dashboard for station management

#### Phase 3 (Week 5-6): Polish & Deployment
- User management for admin
- Simple reporting views
- Testing and bug fixes
- Documentation
- Deployment setup

### Development Focus
- **Functionality First**: Get features working before making them pretty
- **Mobile Responsive**: Ensure basic mobile compatibility
- **Performance**: Keep bundle size small, avoid unnecessary dependencies
- **Accessibility**: Basic ARIA labels and keyboard navigation
- **Error Handling**: Simple error messages and loading states

### Git Conventions
- Use meaningful commit messages
- Create feature branches for new functionality
- Use pull requests for code review
- Keep commits atomic and focused

### Environment Setup
- Use environment variables for configuration
- Maintain separate configs for development and production
- Document environment setup in README
- Use TypeScript strict mode for all environments

## Documentation

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props with TypeScript interfaces
- Include usage examples for reusable components
- Maintain up-to-date README files

### API Documentation
- Document all API endpoints used
- Include request/response examples
- Document error handling scenarios
- Maintain API interface definitions

---

## Quick Reference

### File Extensions
- `.tsx` for React components with JSX
- `.ts` for TypeScript files without JSX
- `.d.ts` for TypeScript declaration files

### Import/Export Patterns
```typescript
// Named exports (preferred)
export const Component = () => { /* ... */ };

// Default exports for main components
export default Component;

// Type-only imports
import type { ComponentProps } from './types';
```

### Common Patterns
```typescript
// MVP Page Component Pattern
const StationListPage: React.FC = () => {
  const { stations, loading, error } = useAppSelector(state => state.stations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <PageLayout title="Charging Stations">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map(station => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

// Simple Card Component Pattern
const StationCard: React.FC<{ station: Station }> = ({ station }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-lg font-medium text-gray-900">{station.name}</h3>
      <StatusBadge status={station.status} />
    </div>
    <p className="text-sm text-gray-600 mb-4">{station.address}</p>
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-500">{station.availableConnectors} available</span>
      <button className="text-blue-600 hover:text-blue-700 font-medium">
        View Details
      </button>
    </div>
  </div>
);

// Simple Form Pattern for MVP
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {error && <ErrorMessage message={error} />}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
};

// Error boundary pattern
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Implementation...
};
```

Remember to follow these guidelines consistently to maintain code quality and team productivity.