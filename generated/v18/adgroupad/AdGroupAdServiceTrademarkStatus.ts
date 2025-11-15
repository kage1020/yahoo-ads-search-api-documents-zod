import { z } from 'zod';

export const AdGroupAdServiceTrademarkStatus = z.enum(["NO_RESTRICTION", "CONFLICT_WITH_TRADEMARK", "CLAIM_IN_PROGRESS", "DISAPPROVED_CLAIM", "DISAPPROVED_REVIEWER", "UNKNOWN"]).nullable();

export type AdGroupAdServiceTrademarkStatus = z.infer<typeof AdGroupAdServiceTrademarkStatus>;
