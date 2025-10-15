export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface UserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}

export interface LoginResponseDto {
  user: UserDto;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export interface ApiResult<T> {
  statusCode: string;
  message: string;
  data?: T;
  isSuccess: boolean;
  error?: string;
}