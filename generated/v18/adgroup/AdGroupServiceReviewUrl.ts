import { z } from 'zod';

import { AdGroupServiceCustomParameter } from './AdGroupServiceCustomParameter';

export const AdGroupServiceReviewUrl = z.object({
  parameters: z.array(AdGroupServiceCustomParameter).nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type AdGroupServiceReviewUrl = z.infer<typeof AdGroupServiceReviewUrl>;
