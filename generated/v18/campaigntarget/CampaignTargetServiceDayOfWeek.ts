import { z } from 'zod';

export const CampaignTargetServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type CampaignTargetServiceDayOfWeek = z.infer<typeof CampaignTargetServiceDayOfWeek>;
