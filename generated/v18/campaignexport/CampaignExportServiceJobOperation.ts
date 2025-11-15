import { z } from 'zod';

import { CampaignExportServiceExportSetting } from './CampaignExportServiceExportSetting';

export const CampaignExportServiceJobOperation = z.object({
  setting: CampaignExportServiceExportSetting
}).nullable();

export type CampaignExportServiceJobOperation = z.infer<typeof CampaignExportServiceJobOperation>;
