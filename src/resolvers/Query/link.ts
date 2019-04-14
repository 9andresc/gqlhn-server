import { Context } from '../../utils';

export default {
  async feed(parent: any, args: any, context: Context) {
    const where = args.filter
      ? {
          OR: [
            { description_contains: args.filter },
            { url_contains: args.filter }
          ]
        }
      : {};

    return context.prisma.links({ where });
  }
};
