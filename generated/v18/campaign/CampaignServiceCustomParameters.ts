import { z } from 'zod';

import { CampaignServiceIsRemove } from './CampaignServiceIsRemove';
import { CampaignServiceCustomParameter } from './CampaignServiceCustomParameter';

export const CampaignServiceCustomParameters = z.object({
  isRemove: CampaignServiceIsRemove,
  parameters: z.array(CampaignServiceCustomParameter).nullable()
}).nullable();

export type CampaignServiceCustomParameters = z.infer<typeof CampaignServiceCustomParameters>;
