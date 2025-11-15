import { z } from 'zod';

import { CampaignCustomizerServiceApprovalStatus } from './CampaignCustomizerServiceApprovalStatus';

export const CampaignCustomizer = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  value: z.string().nullable(),
  approvalStatus: CampaignCustomizerServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type CampaignCustomizer = z.infer<typeof CampaignCustomizer>;
