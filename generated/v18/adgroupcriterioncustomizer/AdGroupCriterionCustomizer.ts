import { z } from 'zod';

import { adGroupCriterionCustomizerServiceApprovalStatus } from './AdGroupCriterionCustomizerServiceApprovalStatus';

export const adGroupCriterionCustomizer = z.object({
  accountId: z.number().int().nullable(),
  criterionId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: adGroupCriterionCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupCriterionCustomizer = z.infer<typeof adGroupCriterionCustomizer>;
