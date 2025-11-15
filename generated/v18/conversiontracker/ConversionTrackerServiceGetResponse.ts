import { z } from 'zod';

import { error } from '../../common/Error';
import { conversionTrackerServicePage } from './ConversionTrackerServicePage';

export const conversionTrackerServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: conversionTrackerServicePage
}).nullable();

export type ConversionTrackerServiceGetResponse = z.infer<typeof conversionTrackerServiceGetResponse>;
