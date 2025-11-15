import { z } from 'zod';

import { campaignAssetServiceList } from './CampaignAssetServiceList';

export const campaignAssetServiceReplaceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignAssetServiceList).nullable()
}).nullable();

export type CampaignAssetServiceReplaceOperation = z.infer<typeof campaignAssetServiceReplaceOperation>;
