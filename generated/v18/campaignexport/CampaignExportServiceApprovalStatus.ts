import { z } from 'zod';

export const campaignExportServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type CampaignExportServiceApprovalStatus = z.infer<typeof campaignExportServiceApprovalStatus>;
