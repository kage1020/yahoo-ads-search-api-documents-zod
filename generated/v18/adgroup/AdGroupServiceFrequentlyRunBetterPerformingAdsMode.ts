import { z } from 'zod';

export const AdGroupServiceFrequentlyRunBetterPerformingAdsMode = z.enum(["APPLY", "DONT_APPLY", "UNKNOWN"]).nullable();

export type AdGroupServiceFrequentlyRunBetterPerformingAdsMode = z.infer<typeof AdGroupServiceFrequentlyRunBetterPerformingAdsMode>;
