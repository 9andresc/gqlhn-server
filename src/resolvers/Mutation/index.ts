import { signin, signup } from './auth';
import { post, vote } from './link';

import { helmet } from '../helmet';

export default {
  // Authentication
  signin: helmet(signin),
  signup: helmet(signup),
  // Link
  post: helmet(post),
  vote: helmet(vote)
};
