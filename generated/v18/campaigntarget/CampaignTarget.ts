import { z } from 'zod';

import { campaignTargetServiceTarget } from './CampaignTargetServiceTarget';

export const campaignTarget = z.object({
  accountId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  target: campaignTargetServiceTarget
}).nullable();

export type CampaignTarget = z.infer<typeof campaignTarget>;
