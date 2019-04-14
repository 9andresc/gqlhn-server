import { Context } from '../utils';

export const Mutation = {
  post: (root: any, args: any, context: Context) => {
    return context.prisma.createLink({
      url: args.url,
      description: args.description
    });
  }
};
