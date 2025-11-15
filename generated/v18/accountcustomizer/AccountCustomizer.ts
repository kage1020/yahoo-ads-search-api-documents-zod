import { z } from 'zod';

import { accountCustomizerServiceApprovalStatus } from './AccountCustomizerServiceApprovalStatus';

export const accountCustomizer = z.object({
  accountId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: accountCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AccountCustomizer = z.infer<typeof accountCustomizer>;
