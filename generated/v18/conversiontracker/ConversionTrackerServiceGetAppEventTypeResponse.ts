import { z } from 'zod';

import { error } from '../../common/Error';
import { conversionTrackerServiceAppEventTypePage } from './ConversionTrackerServiceAppEventTypePage';

export const conversionTrackerServiceGetAppEventTypeResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: conversionTrackerServiceAppEventTypePage
}).nullable();

export type ConversionTrackerServiceGetAppEventTypeResponse = z.infer<typeof conversionTrackerServiceGetAppEventTypeResponse>;
