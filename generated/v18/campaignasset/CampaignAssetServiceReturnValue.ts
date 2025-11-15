import { z } from 'zod';

import { CampaignAssetServiceValue } from './CampaignAssetServiceValue';

export const CampaignAssetServiceReturnValue = z.object({
  values: z.array(CampaignAssetServiceValue).nullable()
}).nullable();

export type CampaignAssetServiceReturnValue = z.infer<typeof CampaignAssetServiceReturnValue>;
