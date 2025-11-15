import { z } from 'zod';

import { CampaignServiceTargetAll } from './CampaignServiceTargetAll';

export const CampaignServiceTargetingSetting = z.object({
  targetAll: CampaignServiceTargetAll
}).nullable();

export type CampaignServiceTargetingSetting = z.infer<typeof CampaignServiceTargetingSetting>;
