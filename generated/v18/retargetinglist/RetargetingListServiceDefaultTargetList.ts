import { z } from 'zod';

import { RetargetingListServiceTag } from './RetargetingListServiceTag';

export const RetargetingListServiceDefaultTargetList = z.object({
  tag: RetargetingListServiceTag
}).nullable();

export type RetargetingListServiceDefaultTargetList = z.infer<typeof RetargetingListServiceDefaultTargetList>;
