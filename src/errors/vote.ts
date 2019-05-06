import { createError } from 'apollo-errors';

export const VoteAlreadyExistsError = createError('VoteAlreadyExistsError', {
  message: 'Vote already exists'
});
