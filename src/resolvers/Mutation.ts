import { TLink } from '../types';

const links: [TLink] = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Full-stack tutorial for GraphQL'
  }
];
let idCount = links.length;

export const Mutation = {
  post: (parent: TLink, args: any) => {
    const link: TLink = {
      id: `link-${idCount++}`,
      description: args.description,
      url: args.url
    };
    links.push(link);
    return link;
  }
};
