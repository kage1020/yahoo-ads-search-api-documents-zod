import { z } from 'zod';

export const campaignTargetServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type CampaignTargetServiceDayOfWeek = z.infer<typeof campaignTargetServiceDayOfWeek>;
