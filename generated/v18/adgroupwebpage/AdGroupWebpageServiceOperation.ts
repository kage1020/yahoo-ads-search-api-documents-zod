import { z } from 'zod';

import { AdGroupWebpage } from './AdGroupWebpage';

export const AdGroupWebpageServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupWebpage).nullable()
}).nullable();

export type AdGroupWebpageServiceOperation = z.infer<typeof AdGroupWebpageServiceOperation>;
