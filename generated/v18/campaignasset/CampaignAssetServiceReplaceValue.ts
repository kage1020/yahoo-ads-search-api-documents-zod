import { z } from 'zod';

import { campaignAsset } from './CampaignAsset';
import { error } from '../../common/Error';

export const campaignAssetServiceReplaceValue = z.object({
  campaignAssets: z.array(campaignAsset).nullable(),
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignAssetServiceReplaceValue = z.infer<typeof campaignAssetServiceReplaceValue>;
