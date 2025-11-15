import { z } from 'zod';

import { RetargetingListServiceValue } from './RetargetingListServiceValue';

export const RetargetingListServiceReturnValue = z.object({
  values: z.array(RetargetingListServiceValue).nullable()
}).nullable();

export type RetargetingListServiceReturnValue = z.infer<typeof RetargetingListServiceReturnValue>;
