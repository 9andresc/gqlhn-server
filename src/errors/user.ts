import { createError } from 'apollo-errors';

export const AuthenticationError = createError('AuthenticationError', {
  message: 'Not authenticated'
});

export const InvalidCredentials = createError('InvalidCredentials', {
  message: 'Invalid credentials'
});

export const UserAlreadyExists = createError('UserAlreadyExists', {
  message: 'User already exists'
});
