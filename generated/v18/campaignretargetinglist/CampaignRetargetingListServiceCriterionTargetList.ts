import { z } from 'zod';

export const CampaignRetargetingListServiceCriterionTargetList = z.object({
  retargetingTrackId: z.number().int().nullable(),
  targetListId: z.number().int().nullable(),
  targetListName: z.string().nullable()
}).nullable();

export type CampaignRetargetingListServiceCriterionTargetList = z.infer<typeof CampaignRetargetingListServiceCriterionTargetList>;
