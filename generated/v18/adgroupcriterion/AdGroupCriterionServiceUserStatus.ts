import { z } from 'zod';

export const adGroupCriterionServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceUserStatus = z.infer<typeof adGroupCriterionServiceUserStatus>;
