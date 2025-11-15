import { z } from 'zod';

import { retargetingListServiceTag } from './RetargetingListServiceTag';

export const retargetingListServiceDefaultTargetList = z.object({
  tag: retargetingListServiceTag
}).nullable();

export type RetargetingListServiceDefaultTargetList = z.infer<typeof retargetingListServiceDefaultTargetList>;
