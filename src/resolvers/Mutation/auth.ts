import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { InvalidCredentials, UserAlreadyExists } from '../../errors';
import { Context } from '../../utils';

export async function signIn(_parent: any, args: any, context: Context) {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new InvalidCredentials();
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new InvalidCredentials();
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET || '');

  return { token, user };
}

export async function signUp(_parent: any, args: any, context: Context) {
  let user = await context.prisma.user({ email: args.email });
  if (user) {
    throw new UserAlreadyExists();
  }

  const password = await bcrypt.hash(args.password, 10);

  user = await context.prisma.createUser({ ...args, password });

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET || '');

  return { token, user };
}
