import { z } from 'zod';

export const campaignServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceIsRemove = z.infer<typeof campaignServiceIsRemove>;
