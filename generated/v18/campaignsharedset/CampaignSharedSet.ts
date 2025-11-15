import { z } from 'zod';

export const campaignSharedSet = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  sharedListId: z.number().int().nullable(),
  sharedListName: z.string().nullable()
}).nullable();

export type CampaignSharedSet = z.infer<typeof campaignSharedSet>;
