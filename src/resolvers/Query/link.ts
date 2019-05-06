import { Context } from '../../utils';

export async function feed(parent: any, args: any, context: Context) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const links = await context.prisma.links({
    where,
    first: args.first,
    skip: args.skip,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .linksConnection({ where })
    .aggregate()
    .count();

  return { links, count };
}
