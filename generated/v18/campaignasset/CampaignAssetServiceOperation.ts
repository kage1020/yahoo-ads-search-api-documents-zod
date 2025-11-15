import { z } from 'zod';

import { campaignAsset } from './CampaignAsset';

export const campaignAssetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignAsset).nullable()
}).nullable();

export type CampaignAssetServiceOperation = z.infer<typeof campaignAssetServiceOperation>;
