import { z } from 'zod';

import { adGroupWebpageServiceWebpageParameter } from './AdGroupWebpageServiceWebpageParameter';

export const adGroupWebpageServiceWebpage = z.object({
  parameter: adGroupWebpageServiceWebpageParameter,
  targetId: z.number().int().nullable(),
  targetTrackId: z.number().int().nullable()
}).nullable();

export type AdGroupWebpageServiceWebpage = z.infer<typeof adGroupWebpageServiceWebpage>;
