import { z } from 'zod';

import { campaignAssetServiceReplaceValue } from './CampaignAssetServiceReplaceValue';

export const campaignAssetServiceReplaceReturnValue = z.object({
  values: z.array(campaignAssetServiceReplaceValue).nullable()
}).nullable();

export type CampaignAssetServiceReplaceReturnValue = z.infer<typeof campaignAssetServiceReplaceReturnValue>;
