import { z } from 'zod';

import { Error } from './Error';
import { CampaignExportServiceReturnValue } from './CampaignExportServiceReturnValue';

export const CampaignExportServiceAddResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignExportServiceReturnValue
}).nullable();

export type CampaignExportServiceAddResponse = z.infer<typeof CampaignExportServiceAddResponse>;
