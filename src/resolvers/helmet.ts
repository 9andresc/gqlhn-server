import { FatalError } from '../errors';

export function helmet(resolver: any) {
  return async function(...args: any) {
    try {
      return await resolver(...args);
    } catch (error) {
      if (error.path) {
        throw new FatalError({ data: { reason: error.message } });
      } else {
        throw error;
      }
    }
  };
}
