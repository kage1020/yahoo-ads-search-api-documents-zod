import { z } from 'zod';

import { AppLink } from './AppLink';
import { Error } from './Error';

export const AppLinkServiceValue = z.object({
  appLink: AppLink,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AppLinkServiceValue = z.infer<typeof AppLinkServiceValue>;
