import { z } from 'zod';

import { campaignTargetServiceNetworkCoverageType } from './CampaignTargetServiceNetworkCoverageType';

export const campaignTargetServiceNetworkTarget = z.object({
  networkCoverageType: campaignTargetServiceNetworkCoverageType
}).nullable();

export type CampaignTargetServiceNetworkTarget = z.infer<typeof campaignTargetServiceNetworkTarget>;
