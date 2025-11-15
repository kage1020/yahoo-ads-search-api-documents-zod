import { z } from 'zod';

import { adGroupServiceTargetAll } from './AdGroupServiceTargetAll';

export const adGroupServiceTargetingSetting = z.object({
  targetAll: adGroupServiceTargetAll
}).nullable();

export type AdGroupServiceTargetingSetting = z.infer<typeof adGroupServiceTargetingSetting>;
