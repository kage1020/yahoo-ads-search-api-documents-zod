import { z } from 'zod';

import { CampaignAssetServiceReplaceValue } from './CampaignAssetServiceReplaceValue';

export const CampaignAssetServiceReplaceReturnValue = z.object({
  values: z.array(CampaignAssetServiceReplaceValue).nullable()
}).nullable();

export type CampaignAssetServiceReplaceReturnValue = z.infer<typeof CampaignAssetServiceReplaceReturnValue>;
