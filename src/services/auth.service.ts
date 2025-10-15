import { LoginRequestDto, LoginResponseDto, ApiResult } from '../types/auth.types';

// Use environment variable or default to localhost
const API_URL = (import.meta.env.VITE_API_URL as string) || 'https://localhost:5001/api';

export const authService = {
  async login(credentials: LoginRequestDto): Promise<ApiResult<LoginResponseDto>> {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        statusCode: '500',
        message: 'An error occurred while logging in',
        isSuccess: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },

  async logout(userId: string, token: string): Promise<ApiResult<boolean>> {
    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        statusCode: '500',
        message: 'An error occurred while logging out',
        isSuccess: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
};