import { Context, getUserId } from '../../utils';

import { VoteAlreadyExistsError } from '../../errors';

export function post(_parent: any, args: any, context: Context) {
  const userId = getUserId(context);

  return context.prisma.createLink({
    description: args.description,
    postedBy: { connect: { id: userId } },
    url: args.url
  });
}

export async function vote(_parent: any, args: any, context: Context) {
  const userId = getUserId(context);

  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId }
  });
  if (linkExists) {
    throw new VoteAlreadyExistsError({ data: { linkId: args.linkId } });
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } }
  });
}
