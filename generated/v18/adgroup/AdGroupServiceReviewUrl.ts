import { z } from 'zod';

import { adGroupServiceCustomParameter } from './AdGroupServiceCustomParameter';

export const adGroupServiceReviewUrl = z.object({
  parameters: z.array(adGroupServiceCustomParameter).nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type AdGroupServiceReviewUrl = z.infer<typeof adGroupServiceReviewUrl>;
