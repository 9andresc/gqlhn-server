import { Context, getUserId } from '../../utils';

export default {
  post(parent: any, args: any, context: Context) {
    const userId = getUserId(context);

    return context.prisma.createLink({
      description: args.description,
      postedBy: { connect: { id: userId } },
      url: args.url
    });
  }
};
