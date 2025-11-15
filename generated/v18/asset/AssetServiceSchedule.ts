import { z } from 'zod';

import { AssetServiceDayOfWeek } from './AssetServiceDayOfWeek';
import { AssetServiceMinuteOfHour } from './AssetServiceMinuteOfHour';

export const AssetServiceSchedule = z.object({
  dayOfWeek: AssetServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  endMinute: AssetServiceMinuteOfHour,
  startHour: z.number().int().nullable(),
  startMinute: AssetServiceMinuteOfHour
}).nullable();

export type AssetServiceSchedule = z.infer<typeof AssetServiceSchedule>;
