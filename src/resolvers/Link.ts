import { TLink } from '../types';

export const Link = {
  id: (parent: TLink) => parent.id,
  description: (parent: TLink) => parent.description,
  url: (parent: TLink) => parent.url
};
