import { z } from 'zod';

import { campaignAsset } from './CampaignAsset';
import { error } from '../../common/Error';

export const campaignAssetServiceValue = z.object({
  campaignAsset: campaignAsset,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignAssetServiceValue = z.infer<typeof campaignAssetServiceValue>;
