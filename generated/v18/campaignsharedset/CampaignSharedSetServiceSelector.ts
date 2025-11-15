import { z } from 'zod';

export const CampaignSharedSetServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  sharedListIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignSharedSetServiceSelector = z.infer<typeof CampaignSharedSetServiceSelector>;
