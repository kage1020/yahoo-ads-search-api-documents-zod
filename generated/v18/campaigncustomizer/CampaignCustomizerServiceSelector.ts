import { z } from 'zod';

import { campaignCustomizerServiceType } from './CampaignCustomizerServiceType';

export const campaignCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(campaignCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignCustomizerServiceSelector = z.infer<typeof campaignCustomizerServiceSelector>;
