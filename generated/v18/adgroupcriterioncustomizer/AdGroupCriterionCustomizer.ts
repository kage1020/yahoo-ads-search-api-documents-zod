import { z } from 'zod';

import { AdGroupCriterionCustomizerServiceApprovalStatus } from './AdGroupCriterionCustomizerServiceApprovalStatus';

export const AdGroupCriterionCustomizer = z.object({
  accountId: z.number().int().nullable(),
  criterionId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: AdGroupCriterionCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupCriterionCustomizer = z.infer<typeof AdGroupCriterionCustomizer>;
