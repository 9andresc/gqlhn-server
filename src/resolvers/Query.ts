import { Context } from '../utils';

export const Query = {
  info: () => 'This is the API of a Hacker News clone',
  feed: (root: any, args: any, context: Context, info: any) => {
    return context.prisma.links();
  }
};
