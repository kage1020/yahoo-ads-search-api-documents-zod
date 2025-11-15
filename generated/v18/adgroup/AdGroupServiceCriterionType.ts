import { z } from 'zod';

export const AdGroupServiceCriterionType = z.enum(["TARGET_LIST", "UNKNOWN"]).nullable();

export type AdGroupServiceCriterionType = z.infer<typeof AdGroupServiceCriterionType>;
