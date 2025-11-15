import { z } from 'zod';

import { AdGroupWebpageServiceWebpageParameter } from './AdGroupWebpageServiceWebpageParameter';

export const AdGroupWebpageServiceWebpage = z.object({
  parameter: AdGroupWebpageServiceWebpageParameter,
  targetId: z.number().int().nullable(),
  targetTrackId: z.number().int().nullable()
}).nullable();

export type AdGroupWebpageServiceWebpage = z.infer<typeof AdGroupWebpageServiceWebpage>;
