import { Context } from '../../utils';

export default {
  feed(parent: any, args: any, context: Context) {
    return context.prisma.links();
  }
};
