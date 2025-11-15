import { z } from 'zod';

import { campaignAssetServiceValue } from './CampaignAssetServiceValue';

export const campaignAssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignAssetServiceValue).nullable()
}).nullable();

export type CampaignAssetServicePage = z.infer<typeof campaignAssetServicePage>;
