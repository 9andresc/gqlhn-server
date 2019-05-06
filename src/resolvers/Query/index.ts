import { feed } from './link';

import { helmet } from '../helmet';

export default {
  // Link
  feed: helmet(feed)
};
