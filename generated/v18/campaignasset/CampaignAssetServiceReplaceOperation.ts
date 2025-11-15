import { z } from 'zod';

import { CampaignAssetServiceList } from './CampaignAssetServiceList';

export const CampaignAssetServiceReplaceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignAssetServiceList).nullable()
}).nullable();

export type CampaignAssetServiceReplaceOperation = z.infer<typeof CampaignAssetServiceReplaceOperation>;
