import { z } from 'zod';

export const CampaignRetargetingListServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type CampaignRetargetingListServiceExcludedType = z.infer<typeof CampaignRetargetingListServiceExcludedType>;
