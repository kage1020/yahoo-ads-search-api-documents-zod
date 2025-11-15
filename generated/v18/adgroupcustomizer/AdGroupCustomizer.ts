import { z } from 'zod';

import { AdGroupCustomizerServiceApprovalStatus } from './AdGroupCustomizerServiceApprovalStatus';

export const AdGroupCustomizer = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: AdGroupCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupCustomizer = z.infer<typeof AdGroupCustomizer>;
