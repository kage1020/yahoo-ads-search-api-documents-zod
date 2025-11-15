import { z } from 'zod';

export const campaignTargetServiceMinuteOfHour = z.enum(["ZERO", "FIFTEEN", "THIRTY", "FORTY_FIVE", "UNKNOWN"]).nullable();

export type CampaignTargetServiceMinuteOfHour = z.infer<typeof campaignTargetServiceMinuteOfHour>;
