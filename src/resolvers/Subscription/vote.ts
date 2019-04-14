import { Context } from '../../utils';

export default {
  newVote: {
    resolve(payload: any) {
      return payload;
    },
    subscribe(parent: any, args: any, context: Context) {
      return context.prisma.$subscribe
        .vote({ mutation_in: ['CREATED'] })
        .node();
    }
  }
};
