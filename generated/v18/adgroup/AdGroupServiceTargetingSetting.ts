import { z } from 'zod';

import { AdGroupServiceTargetAll } from './AdGroupServiceTargetAll';

export const AdGroupServiceTargetingSetting = z.object({
  targetAll: AdGroupServiceTargetAll
}).nullable();

export type AdGroupServiceTargetingSetting = z.infer<typeof AdGroupServiceTargetingSetting>;
