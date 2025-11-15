import { z } from 'zod';

import { campaignExportServiceApprovalStatus } from './CampaignExportServiceApprovalStatus';
import { campaignExportServiceUserStatus } from './CampaignExportServiceUserStatus';
import { campaignExportServiceEncoding } from './CampaignExportServiceEncoding';
import { campaignExportServiceEntityType } from './CampaignExportServiceEntityType';
import { campaignExportServiceLang } from './CampaignExportServiceLang';
import { campaignExportServiceOutput } from './CampaignExportServiceOutput';

export const campaignExportServiceExportSetting = z.object({
  accountId: z.number().int(),
  adGroupAdApprovalStatuses: z.array(campaignExportServiceApprovalStatus).nullable(),
  adGroupAdUserStatuses: z.array(campaignExportServiceUserStatus).nullable(),
  adGroupCriterionApprovalStatuses: z.array(campaignExportServiceApprovalStatus).nullable(),
  adGroupCriterionIds: z.array(z.number().int().nullable()).nullable(),
  adGroupCriterionUserStatuses: z.array(campaignExportServiceUserStatus).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adGroupUserStatuses: z.array(campaignExportServiceUserStatus).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  campaignCriterionIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  campaignUserStatuses: z.array(campaignExportServiceUserStatus).nullable(),
  encoding: campaignExportServiceEncoding,
  entityTypes: z.array(campaignExportServiceEntityType).nullable(),
  exportFields: z.array(z.string().nullable()).nullable(),
  jobName: z.string().nullable(),
  lang: campaignExportServiceLang,
  output: campaignExportServiceOutput
}).nullable();

export type CampaignExportServiceExportSetting = z.infer<typeof campaignExportServiceExportSetting>;
