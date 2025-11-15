import { z } from 'zod';

export const CampaignServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceIsRemove = z.infer<typeof CampaignServiceIsRemove>;
