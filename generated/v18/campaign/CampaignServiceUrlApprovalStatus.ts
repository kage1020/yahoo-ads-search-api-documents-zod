import { z } from 'zod';

export const CampaignServiceUrlApprovalStatus = z.enum(["NONE", "APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "DISAPPROVED", "UNKNOWN"]).nullable();

export type CampaignServiceUrlApprovalStatus = z.infer<typeof CampaignServiceUrlApprovalStatus>;
