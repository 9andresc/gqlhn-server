import jwt from 'jsonwebtoken';

import { AuthenticationError } from './errors';
import { Prisma } from './generated/prisma-client';

export interface Context {
  prisma: Prisma;
  request: any;
}

export function getUserId(context: Context) {
  const Authorization: string | undefined = context.request.get(
    'Authorization'
  );
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET || '') as {
      userId: string;
    };
    return userId;
  }

  throw new AuthenticationError();
}
