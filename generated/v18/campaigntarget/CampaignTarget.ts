import { z } from 'zod';

import { CampaignTargetServiceTarget } from './CampaignTargetServiceTarget';

export const CampaignTarget = z.object({
  accountId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  target: CampaignTargetServiceTarget
}).nullable();

export type CampaignTarget = z.infer<typeof CampaignTarget>;
