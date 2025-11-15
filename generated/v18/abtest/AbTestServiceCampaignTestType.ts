import { z } from 'zod';

export const AbTestServiceCampaignTestType = z.enum(["BASE", "TEST", "NONE", "UNKNOWN"]).nullable();

export type AbTestServiceCampaignTestType = z.infer<typeof AbTestServiceCampaignTestType>;
