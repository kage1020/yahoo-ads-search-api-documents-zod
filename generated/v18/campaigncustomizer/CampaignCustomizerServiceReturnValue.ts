import { z } from 'zod';

import { CampaignCustomizerServiceValue } from './CampaignCustomizerServiceValue';

export const CampaignCustomizerServiceReturnValue = z.object({
  values: z.array(CampaignCustomizerServiceValue).nullable()
}).nullable();

export type CampaignCustomizerServiceReturnValue = z.infer<typeof CampaignCustomizerServiceReturnValue>;
