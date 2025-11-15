import { z } from 'zod';

export const accountTrackingUrlServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountTrackingUrlServiceSelector = z.infer<typeof accountTrackingUrlServiceSelector>;
