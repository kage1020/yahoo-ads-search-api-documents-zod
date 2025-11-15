import { z } from 'zod';

import { Error } from './Error';
import { ConversionTrackerServicePage } from './ConversionTrackerServicePage';

export const ConversionTrackerServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ConversionTrackerServicePage
}).nullable();

export type ConversionTrackerServiceGetResponse = z.infer<typeof ConversionTrackerServiceGetResponse>;
