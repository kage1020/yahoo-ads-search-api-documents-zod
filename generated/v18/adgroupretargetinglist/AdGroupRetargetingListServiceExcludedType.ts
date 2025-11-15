import { z } from 'zod';

export const AdGroupRetargetingListServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type AdGroupRetargetingListServiceExcludedType = z.infer<typeof AdGroupRetargetingListServiceExcludedType>;
