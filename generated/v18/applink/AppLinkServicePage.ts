import { z } from 'zod';

import { AppLinkServiceValue } from './AppLinkServiceValue';

export const AppLinkServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AppLinkServiceValue).nullable()
}).nullable();

export type AppLinkServicePage = z.infer<typeof AppLinkServicePage>;
