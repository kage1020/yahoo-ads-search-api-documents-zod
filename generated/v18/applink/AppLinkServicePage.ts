import { z } from 'zod';

import { appLinkServiceValue } from './AppLinkServiceValue';

export const appLinkServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(appLinkServiceValue).nullable()
}).nullable();

export type AppLinkServicePage = z.infer<typeof appLinkServicePage>;
