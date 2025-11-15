import { z } from 'zod';

export const AppLinkServiceSelector = z.object({
  accountId: z.number().int(),
  appLinkIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AppLinkServiceSelector = z.infer<typeof AppLinkServiceSelector>;
