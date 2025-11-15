import { z } from 'zod';

export const AssetServiceTrademarkStatus = z.enum(["NO_RESTRICTION", "CONFLICT_WITH_TRADEMARK", "CLAIM_IN_PROGRESS", "DISAPPROVED_CLAIM", "DISAPPROVED_REVIEWER", "UNKNOWN"]).nullable();

export type AssetServiceTrademarkStatus = z.infer<typeof AssetServiceTrademarkStatus>;
