import { z } from 'zod';

export const campaignTargetServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type CampaignTargetServiceExcludedType = z.infer<typeof campaignTargetServiceExcludedType>;
