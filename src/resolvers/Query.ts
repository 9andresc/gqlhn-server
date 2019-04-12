import { TLink } from '../types';

const links: [TLink] = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Full-stack tutorial for GraphQL'
  }
];

export const Query = {
  info: () => 'This is the API of a Hacker News clone',
  feed: () => links
};
