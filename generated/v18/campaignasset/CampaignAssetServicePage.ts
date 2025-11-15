import { z } from 'zod';

import { CampaignAssetServiceValue } from './CampaignAssetServiceValue';

export const CampaignAssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignAssetServiceValue).nullable()
}).nullable();

export type CampaignAssetServicePage = z.infer<typeof CampaignAssetServicePage>;
