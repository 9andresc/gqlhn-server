import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Context, APP_SECRET } from '../../utils';

export default {
  async signin(parent: any, args: any, context: Context) {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return { token, user };
  },
  async signup(parent: any, args: any, context: Context) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return { token, user };
  }
};
