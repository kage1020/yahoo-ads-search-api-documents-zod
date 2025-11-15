import { z } from 'zod';

export const CampaignServiceGeoTargetType = z.enum(["DONT_CARE", "AREA_OF_INTENT", "LOCATION_OF_PRESENCE", "UNKNOWN"]).nullable();

export type CampaignServiceGeoTargetType = z.infer<typeof CampaignServiceGeoTargetType>;
