import { z } from 'zod';

export const adGroupRetargetingListServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type AdGroupRetargetingListServiceExcludedType = z.infer<typeof adGroupRetargetingListServiceExcludedType>;
