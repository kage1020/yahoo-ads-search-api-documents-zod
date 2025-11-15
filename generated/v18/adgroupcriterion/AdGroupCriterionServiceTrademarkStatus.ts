import { z } from 'zod';

export const adGroupCriterionServiceTrademarkStatus = z.enum(["NO_RESTRICTION", "CONFLICT_WITH_TRADEMARK", "CLAIM_IN_PROGRESS", "DISAPPROVED_CLAIM", "DISAPPROVED_REVIEWER", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceTrademarkStatus = z.infer<typeof adGroupCriterionServiceTrademarkStatus>;
