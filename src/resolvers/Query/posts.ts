import { Context } from '../../utils';

export const posts = {
  feed(parent: any, args: any, context: Context) {
    return context.prisma.links();
  }
};
