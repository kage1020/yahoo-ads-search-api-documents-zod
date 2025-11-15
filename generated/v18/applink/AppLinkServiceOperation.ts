import { z } from 'zod';

import { appLink } from './AppLink';

export const appLinkServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(appLink).nullable()
}).nullable();

export type AppLinkServiceOperation = z.infer<typeof appLinkServiceOperation>;
