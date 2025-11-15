import { z } from 'zod';

import { campaignAssetServiceValue } from './CampaignAssetServiceValue';

export const campaignAssetServiceReturnValue = z.object({
  values: z.array(campaignAssetServiceValue).nullable()
}).nullable();

export type CampaignAssetServiceReturnValue = z.infer<typeof campaignAssetServiceReturnValue>;
