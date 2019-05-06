import { Context } from '../../utils';

export const newLink = {
  resolve(payload: any) {
    return payload;
  },
  subscribe(parent: any, args: any, context: Context) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node();
  }
};
