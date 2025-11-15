import { z } from 'zod';

export const biddingStrategyServiceType = z.enum(["TARGET_ROAS", "MAXIMIZE_CLICKS", "TARGET_CPA", "TARGET_IMPRESSION_SHARE", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceType = z.infer<typeof biddingStrategyServiceType>;
