import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/auth.service';
import { LoginRequestDto, LoginResponseDto, UserDto, ApiResult } from '../../types/auth.types';

interface AuthState {
  user: UserDto | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

// Load auth state from localStorage on initialization
const loadAuthState = (): AuthState => {
  if (typeof window === 'undefined') {
    return initialState;
  }

  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const user = localStorage.getItem('user');
    const expiresAt = localStorage.getItem('expiresAt');

    if (accessToken && refreshToken && user && expiresAt) {
      return {
        user: JSON.parse(user),
        accessToken,
        refreshToken,
        expiresAt,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    }
  } catch (e) {
    console.error('Failed to load auth state from localStorage', e);
  }

  return initialState;
};

// Async thunk for login
export const login = createAsyncThunk<LoginResponseDto, LoginRequestDto>(
  'auth/login',
  async (credentials: LoginRequestDto, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);

      if (!response.isSuccess || !response.data) {
        return rejectWithValue(response.message || 'Login failed');
      }

      // Store in localStorage
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('expiresAt', response.data.expiresAt);

      return response.data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Login failed');
    }
  }
);

// Async thunk for logout
export const logout = createAsyncThunk<ApiResult<boolean> | undefined, void>(
  'auth/logout',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState() as { auth: AuthState };
    
    if (!auth.accessToken || !auth.user?.id) {
      return;
    }

    try {
      const response = await authService.logout(auth.user.id, auth.accessToken);

      // Clear localStorage regardless of the API response
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      localStorage.removeItem('expiresAt');

      return response;
    } catch (error) {
      // Even if API call fails, clear localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      localStorage.removeItem('expiresAt');
      
      return rejectWithValue(error instanceof Error ? error.message : 'Logout failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthState(),
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.expiresAt = action.payload.expiresAt;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        // Reset the entire state
        Object.assign(state, initialState);
      })
      .addCase(logout.rejected, (state) => {
        // Reset the entire state even if the API call failed
        Object.assign(state, initialState);
      });
  }
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;