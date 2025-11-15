import { z } from 'zod';

import { ConversionTrackerServiceAppEvent } from './ConversionTrackerServiceAppEvent';
import { Error } from './Error';

export const ConversionTrackerServiceAppEventTypeValue = z.object({
  appEvent: ConversionTrackerServiceAppEvent,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ConversionTrackerServiceAppEventTypeValue = z.infer<typeof ConversionTrackerServiceAppEventTypeValue>;
