import { z } from 'zod';

export const adGroupRetargetingListServiceCriterionTargetList = z.object({
  retargetingTrackId: z.number().int().nullable(),
  targetListId: z.number().int().nullable(),
  targetListName: z.string().nullable()
}).nullable();

export type AdGroupRetargetingListServiceCriterionTargetList = z.infer<typeof adGroupRetargetingListServiceCriterionTargetList>;
