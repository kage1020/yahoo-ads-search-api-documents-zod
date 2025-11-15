import { z } from 'zod';

export const CampaignCustomizerServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type CampaignCustomizerServiceApprovalStatus = z.infer<typeof CampaignCustomizerServiceApprovalStatus>;
