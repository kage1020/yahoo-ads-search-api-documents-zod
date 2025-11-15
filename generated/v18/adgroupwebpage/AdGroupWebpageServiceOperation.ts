import { z } from 'zod';

import { adGroupWebpage } from './AdGroupWebpage';

export const adGroupWebpageServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupWebpage).nullable()
}).nullable();

export type AdGroupWebpageServiceOperation = z.infer<typeof adGroupWebpageServiceOperation>;
