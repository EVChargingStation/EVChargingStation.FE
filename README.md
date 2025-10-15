# EV Charging Station - Frontend

The frontend application for the EV Charging Station management system. Built with React, TypeScript, and Vite, following a minimalist design approach for the MVP.

This project is the user-facing interface for both EV drivers and system administrators, designed to be simple, functional, and easy to use.

## Tech Stack
- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)

## Quick Start

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd EVChargingStation.FE
    ```

2.  **Install dependencies (using pnpm):**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```

The application will be available at `http://localhost:5173`.

## MVP Scope & Design Philosophy
This project is an MVP (Minimum Viable Product) with a focus on core functionality and a minimalist design.

-   **Design Philosophy**: Clean, uncluttered, and functional UI with a simple color palette and ample whitespace.
-   **User Roles**: The application supports two main roles: **EV Driver** and **Admin**.
-   **Key Principle**: Functionality over complex aesthetics. Features are simplified for rapid development (e.g., list views instead of maps, simulated payments).

---

## Application Pages (MVP)

Here is a breakdown of the pages required to build the MVP.

### 1. Authentication Pages (for all users)
-   **`/login`**: User login page.
-   **`/register`**: New user registration page.
-   **`/forgot-password`**: Password recovery page (optional for initial MVP).

### 2. EV Driver Pages (Core User Features)
-   **`/dashboard`**: Main dashboard after login, showing quick stats or recent activity.
-   **`/stations`**: A list view of all available charging stations.
-   **`/stations/:id`**: Detailed view of a specific station, including connector types and status.
-   **`/profile`**: User profile management (personal info, vehicle details).
-   **`/charging/session`**: A page to monitor an active charging session.
-   **`/charging/history`**: A list of all past charging sessions.
-   **`/payments`**: Transaction history and simplified electronic receipts.

### 3. Admin Pages (Management Features)
-   **`/admin/dashboard`**: Admin-specific dashboard with overview statistics.
-   **`/admin/stations`**: CRUD interface for managing stations and their charging points.
-   **`/admin/users`**: CRUD interface for managing users.
-   **`/admin/reports/revenue`**: Simple report showing revenue by station.
-   **`/admin/reports/usage`**: Simple report showing station usage frequency.

### 4. Common Pages
-   **`/`**: Landing page or redirects to login/dashboard.
-   **`/404`**: Not Found page.
-   **`/unauthorized`**: Access Denied page.

---

## Proposed Directory Structure

To keep the project organized, pages will be structured by role:

```
src/
└── pages/
    ├── auth/
    │   ├── LoginPage.tsx
    │   └── RegisterPage.tsx
    ├── driver/
    │   ├── DriverDashboardPage.tsx
    │   ├── StationsPage.tsx
    │   ├── StationDetailPage.tsx
    │   ├── ProfilePage.tsx
    │   ├── ChargingSessionPage.tsx
    │   └── PaymentsPage.tsx
    ├── admin/
    │   ├── AdminDashboardPage.tsx
    │   ├── StationManagementPage.tsx
    │   ├── UserManagementPage.tsx
    │   └── ReportsPage.tsx
    └── common/
        ├── HomePage.tsx
        ├── NotFoundPage.tsx
        └── UnauthorizedPage.tsx
```

## MVP Development Plan

The development is planned in three phases:

-   **Phase 1 (Weeks 1-2)**: Foundation, Authentication, and basic station views.
-   **Phase 2 (Weeks 3-4)**: Core charging logic and Admin station management.
-   **Phase 3 (Weeks 5-6)**: Payment history, user management, and basic reporting.
