import { Context } from '../utils';

export const Link = {
  postedBy(parent: any, args: any, context: Context) {
    return context.prisma.link({ id: parent.id }).postedBy();
  }
};
