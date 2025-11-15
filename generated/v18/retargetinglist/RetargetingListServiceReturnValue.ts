import { z } from 'zod';

import { retargetingListServiceValue } from './RetargetingListServiceValue';

export const retargetingListServiceReturnValue = z.object({
  values: z.array(retargetingListServiceValue).nullable()
}).nullable();

export type RetargetingListServiceReturnValue = z.infer<typeof retargetingListServiceReturnValue>;
