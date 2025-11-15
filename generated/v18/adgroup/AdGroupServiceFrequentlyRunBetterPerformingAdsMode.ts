import { z } from 'zod';

export const adGroupServiceFrequentlyRunBetterPerformingAdsMode = z.enum(["APPLY", "DONT_APPLY", "UNKNOWN"]).nullable();

export type AdGroupServiceFrequentlyRunBetterPerformingAdsMode = z.infer<typeof adGroupServiceFrequentlyRunBetterPerformingAdsMode>;
