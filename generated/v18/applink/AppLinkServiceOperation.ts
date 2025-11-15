import { z } from 'zod';

import { AppLink } from './AppLink';

export const AppLinkServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AppLink).nullable()
}).nullable();

export type AppLinkServiceOperation = z.infer<typeof AppLinkServiceOperation>;
