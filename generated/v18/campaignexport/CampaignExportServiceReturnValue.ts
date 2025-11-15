import { z } from 'zod';

import { CampaignExportServiceValue } from './CampaignExportServiceValue';

export const CampaignExportServiceReturnValue = z.object({
  values: z.array(CampaignExportServiceValue).nullable()
}).nullable();

export type CampaignExportServiceReturnValue = z.infer<typeof CampaignExportServiceReturnValue>;
