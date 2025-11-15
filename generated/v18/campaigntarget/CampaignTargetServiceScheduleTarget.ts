import { z } from 'zod';

import { CampaignTargetServiceDayOfWeek } from './CampaignTargetServiceDayOfWeek';
import { CampaignTargetServiceMinuteOfHour } from './CampaignTargetServiceMinuteOfHour';

export const CampaignTargetServiceScheduleTarget = z.object({
  dayOfWeek: CampaignTargetServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  endMinute: CampaignTargetServiceMinuteOfHour,
  startHour: z.number().int().nullable(),
  startMinute: CampaignTargetServiceMinuteOfHour
}).nullable();

export type CampaignTargetServiceScheduleTarget = z.infer<typeof CampaignTargetServiceScheduleTarget>;
