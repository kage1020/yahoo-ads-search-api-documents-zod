import { z } from 'zod';

export const CampaignTargetServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type CampaignTargetServiceExcludedType = z.infer<typeof CampaignTargetServiceExcludedType>;
