import { signIn, signUp } from './auth';
import { post, vote } from './link';

import { helmet } from '../helmet';

export default {
  // Authentication
  signIn: helmet(signIn),
  signUp: helmet(signUp),
  // Link
  post: helmet(post),
  vote: helmet(vote)
};
