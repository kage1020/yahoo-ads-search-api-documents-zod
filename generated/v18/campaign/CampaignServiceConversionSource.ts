import { z } from 'zod';

export const CampaignServiceConversionSource = z.enum(["WEBSITE", "APP", "CALL_FROM_ADS", "UNKNOWN"]).nullable();

export type CampaignServiceConversionSource = z.infer<typeof CampaignServiceConversionSource>;
