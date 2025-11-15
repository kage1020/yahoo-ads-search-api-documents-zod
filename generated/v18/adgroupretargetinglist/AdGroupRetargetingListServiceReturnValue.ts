import { z } from 'zod';

import { adGroupRetargetingListServiceValue } from './AdGroupRetargetingListServiceValue';

export const adGroupRetargetingListServiceReturnValue = z.object({
  values: z.array(adGroupRetargetingListServiceValue).nullable()
}).nullable();

export type AdGroupRetargetingListServiceReturnValue = z.infer<typeof adGroupRetargetingListServiceReturnValue>;
