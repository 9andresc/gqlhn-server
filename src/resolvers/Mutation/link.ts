import { Context, getUserId } from '../../utils';

export default {
  post(parent: any, args: any, context: Context) {
    const userId = getUserId(context);

    return context.prisma.createLink({
      description: args.description,
      postedBy: { connect: { id: userId } },
      url: args.url
    });
  },
  async vote(parent: any, args: any, context: Context) {
    const userId = getUserId(context);

    const linkExists = await context.prisma.$exists.vote({
      user: { id: userId },
      link: { id: args.linkId }
    });
    if (linkExists) {
      throw new Error(`Already voted for link: ${args.linkId}`);
    }

    return context.prisma.createVote({
      user: { connect: { id: userId } },
      link: { connect: { id: args.linkId } }
    });
  }
};
