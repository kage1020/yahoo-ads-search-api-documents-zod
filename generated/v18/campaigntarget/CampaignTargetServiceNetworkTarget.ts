import { z } from 'zod';

import { CampaignTargetServiceNetworkCoverageType } from './CampaignTargetServiceNetworkCoverageType';

export const CampaignTargetServiceNetworkTarget = z.object({
  networkCoverageType: CampaignTargetServiceNetworkCoverageType
}).nullable();

export type CampaignTargetServiceNetworkTarget = z.infer<typeof CampaignTargetServiceNetworkTarget>;
