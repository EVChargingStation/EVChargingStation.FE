// Common types used across all platforms
export interface User {
  id: string;
  email: string;
  name: string;
  // Add more fields as needed
}

export interface ChargingStation {
  id: string;
  name: string;
  // Add more fields as needed
}

// Platform-specific types
export type Platform = 'web' | 'mobile' | 'desktop';