import { z } from 'zod';

import { AdGroupRetargetingListServiceValue } from './AdGroupRetargetingListServiceValue';

export const AdGroupRetargetingListServiceReturnValue = z.object({
  values: z.array(AdGroupRetargetingListServiceValue).nullable()
}).nullable();

export type AdGroupRetargetingListServiceReturnValue = z.infer<typeof AdGroupRetargetingListServiceReturnValue>;
