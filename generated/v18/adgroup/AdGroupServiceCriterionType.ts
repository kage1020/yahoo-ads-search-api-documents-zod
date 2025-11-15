import { z } from 'zod';

export const adGroupServiceCriterionType = z.enum(["TARGET_LIST", "UNKNOWN"]).nullable();

export type AdGroupServiceCriterionType = z.infer<typeof adGroupServiceCriterionType>;
