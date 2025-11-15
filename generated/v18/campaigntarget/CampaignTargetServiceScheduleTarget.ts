import { z } from 'zod';

import { campaignTargetServiceDayOfWeek } from './CampaignTargetServiceDayOfWeek';
import { campaignTargetServiceMinuteOfHour } from './CampaignTargetServiceMinuteOfHour';

export const campaignTargetServiceScheduleTarget = z.object({
  dayOfWeek: campaignTargetServiceDayOfWeek,
  endHour: z.number().int().nullable(),
  endMinute: campaignTargetServiceMinuteOfHour,
  startHour: z.number().int().nullable(),
  startMinute: campaignTargetServiceMinuteOfHour
}).nullable();

export type CampaignTargetServiceScheduleTarget = z.infer<typeof campaignTargetServiceScheduleTarget>;
