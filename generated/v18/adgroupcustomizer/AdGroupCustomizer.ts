import { z } from 'zod';

import { adGroupCustomizerServiceApprovalStatus } from './AdGroupCustomizerServiceApprovalStatus';

export const adGroupCustomizer = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: adGroupCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupCustomizer = z.infer<typeof adGroupCustomizer>;
