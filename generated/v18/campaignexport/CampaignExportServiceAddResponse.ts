import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignExportServiceReturnValue } from './CampaignExportServiceReturnValue';

export const campaignExportServiceAddResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignExportServiceReturnValue
}).nullable();

export type CampaignExportServiceAddResponse = z.infer<typeof campaignExportServiceAddResponse>;
