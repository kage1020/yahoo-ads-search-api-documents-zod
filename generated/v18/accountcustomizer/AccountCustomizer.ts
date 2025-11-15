import { z } from 'zod';

import { AccountCustomizerServiceApprovalStatus } from './AccountCustomizerServiceApprovalStatus';

export const AccountCustomizer = z.object({
  accountId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: AccountCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AccountCustomizer = z.infer<typeof AccountCustomizer>;
