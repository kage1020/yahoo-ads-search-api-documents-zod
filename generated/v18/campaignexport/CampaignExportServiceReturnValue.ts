import { z } from 'zod';

import { campaignExportServiceValue } from './CampaignExportServiceValue';

export const campaignExportServiceReturnValue = z.object({
  values: z.array(campaignExportServiceValue).nullable()
}).nullable();

export type CampaignExportServiceReturnValue = z.infer<typeof campaignExportServiceReturnValue>;
