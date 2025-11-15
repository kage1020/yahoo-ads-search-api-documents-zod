import { z } from 'zod';

export const campaignCustomizerServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type CampaignCustomizerServiceApprovalStatus = z.infer<typeof campaignCustomizerServiceApprovalStatus>;
