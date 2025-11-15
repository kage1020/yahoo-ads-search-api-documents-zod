import { z } from 'zod';

import { campaignCustomizerServiceApprovalStatus } from './CampaignCustomizerServiceApprovalStatus';

export const campaignCustomizer = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: campaignCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type CampaignCustomizer = z.infer<typeof campaignCustomizer>;
