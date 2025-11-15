import { z } from 'zod';

export const campaignRetargetingListServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type CampaignRetargetingListServiceExcludedType = z.infer<typeof campaignRetargetingListServiceExcludedType>;
