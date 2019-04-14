import { Context } from '../utils';

export const User = {
  links(parent: any, args: any, context: Context) {
    return context.prisma.user({ id: parent.id }).links();
  }
};
