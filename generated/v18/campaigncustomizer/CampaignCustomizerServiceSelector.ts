import { z } from 'zod';

import { CampaignCustomizerServiceType } from './CampaignCustomizerServiceType';

export const CampaignCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(CampaignCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignCustomizerServiceSelector = z.infer<typeof CampaignCustomizerServiceSelector>;
