import { z } from 'zod';

export const campaignServiceConversionSource = z.enum(["WEBSITE", "APP", "CALL_FROM_ADS", "UNKNOWN"]).nullable();

export type CampaignServiceConversionSource = z.infer<typeof campaignServiceConversionSource>;
