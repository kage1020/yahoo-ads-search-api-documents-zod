import { z } from 'zod';

import { appLink } from './AppLink';
import { error } from '../../common/Error';

export const appLinkServiceValue = z.object({
  appLink: appLink,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AppLinkServiceValue = z.infer<typeof appLinkServiceValue>;
