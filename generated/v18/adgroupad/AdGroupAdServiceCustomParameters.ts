import { z } from 'zod';

import { adGroupAdServiceIsRemove } from './AdGroupAdServiceIsRemove';
import { adGroupAdServiceCustomParameter } from './AdGroupAdServiceCustomParameter';

export const adGroupAdServiceCustomParameters = z.object({
  isRemove: adGroupAdServiceIsRemove,
  parameters: z.array(adGroupAdServiceCustomParameter).nullable()
}).nullable();

export type AdGroupAdServiceCustomParameters = z.infer<typeof adGroupAdServiceCustomParameters>;
