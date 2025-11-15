import { z } from 'zod';

import { CampaignExportServiceApprovalStatus } from './CampaignExportServiceApprovalStatus';
import { CampaignExportServiceUserStatus } from './CampaignExportServiceUserStatus';
import { CampaignExportServiceEncoding } from './CampaignExportServiceEncoding';
import { CampaignExportServiceEntityType } from './CampaignExportServiceEntityType';
import { CampaignExportServiceLang } from './CampaignExportServiceLang';
import { CampaignExportServiceOutput } from './CampaignExportServiceOutput';

export const CampaignExportServiceExportSetting = z.object({
  accountId: z.number().int(),
  adGroupAdApprovalStatuses: z.array(CampaignExportServiceApprovalStatus).nullable(),
  adGroupAdUserStatuses: z.array(CampaignExportServiceUserStatus).nullable(),
  adGroupCriterionApprovalStatuses: z.array(CampaignExportServiceApprovalStatus).nullable(),
  adGroupCriterionIds: z.array(z.number().int().nullable()).nullable(),
  adGroupCriterionUserStatuses: z.array(CampaignExportServiceUserStatus).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adGroupUserStatuses: z.array(CampaignExportServiceUserStatus).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  campaignCriterionIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  campaignUserStatuses: z.array(CampaignExportServiceUserStatus).nullable(),
  encoding: CampaignExportServiceEncoding,
  entityTypes: z.array(CampaignExportServiceEntityType).nullable(),
  exportFields: z.array(z.string().nullable()).nullable(),
  jobName: z.string().nullable(),
  lang: CampaignExportServiceLang,
  output: CampaignExportServiceOutput
}).nullable();

export type CampaignExportServiceExportSetting = z.infer<typeof CampaignExportServiceExportSetting>;
