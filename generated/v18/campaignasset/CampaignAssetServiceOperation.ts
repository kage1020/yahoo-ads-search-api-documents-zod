import { z } from 'zod';

import { CampaignAsset } from './CampaignAsset';

export const CampaignAssetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignAsset).nullable()
}).nullable();

export type CampaignAssetServiceOperation = z.infer<typeof CampaignAssetServiceOperation>;
