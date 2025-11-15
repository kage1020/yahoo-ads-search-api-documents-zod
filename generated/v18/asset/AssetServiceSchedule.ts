import { z } from 'zod';

import { assetServiceDayOfWeek } from './AssetServiceDayOfWeek';
import { assetServiceMinuteOfHour } from './AssetServiceMinuteOfHour';

export const assetServiceSchedule = z.object({
  dayOfWeek: assetServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  endMinute: assetServiceMinuteOfHour,
  startHour: z.number().int().nullable(),
  startMinute: assetServiceMinuteOfHour
}).nullable();

export type AssetServiceSchedule = z.infer<typeof assetServiceSchedule>;
