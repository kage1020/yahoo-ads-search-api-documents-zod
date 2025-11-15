import { z } from 'zod';

export const CampaignTargetServiceMinuteOfHour = z.enum(["ZERO", "FIFTEEN", "THIRTY", "FORTY_FIVE", "UNKNOWN"]).nullable();

export type CampaignTargetServiceMinuteOfHour = z.infer<typeof CampaignTargetServiceMinuteOfHour>;
