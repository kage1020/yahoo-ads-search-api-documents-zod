import { z } from 'zod';

import { adGroupServiceIsRemove } from './AdGroupServiceIsRemove';
import { adGroupServiceCustomParameter } from './AdGroupServiceCustomParameter';

export const adGroupServiceCustomParameters = z.object({
  isRemove: adGroupServiceIsRemove,
  parameters: z.array(adGroupServiceCustomParameter).nullable()
}).nullable();

export type AdGroupServiceCustomParameters = z.infer<typeof adGroupServiceCustomParameters>;
