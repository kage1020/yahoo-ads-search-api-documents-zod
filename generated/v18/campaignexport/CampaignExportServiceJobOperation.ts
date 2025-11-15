import { z } from 'zod';

import { campaignExportServiceExportSetting } from './CampaignExportServiceExportSetting';

export const campaignExportServiceJobOperation = z.object({
  setting: campaignExportServiceExportSetting
}).nullable();

export type CampaignExportServiceJobOperation = z.infer<typeof campaignExportServiceJobOperation>;
