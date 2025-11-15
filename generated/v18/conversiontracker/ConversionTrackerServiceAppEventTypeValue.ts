import { z } from 'zod';

import { conversionTrackerServiceAppEvent } from './ConversionTrackerServiceAppEvent';
import { error } from '../../common/Error';

export const conversionTrackerServiceAppEventTypeValue = z.object({
  appEvent: conversionTrackerServiceAppEvent,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ConversionTrackerServiceAppEventTypeValue = z.infer<typeof conversionTrackerServiceAppEventTypeValue>;
