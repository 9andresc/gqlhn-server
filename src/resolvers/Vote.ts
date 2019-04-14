import { Context } from '../utils';

export const Vote = {
  link(parent: any, args: any, context: Context) {
    return context.prisma.vote({ id: parent.id }).link();
  },
  user(parent: any, args: any, context: Context) {
    return context.prisma.vote({ id: parent.id }).user();
  }
};
