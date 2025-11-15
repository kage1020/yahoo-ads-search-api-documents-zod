import { z } from 'zod';

export const AdGroupCriterionServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceUserStatus = z.infer<typeof AdGroupCriterionServiceUserStatus>;
