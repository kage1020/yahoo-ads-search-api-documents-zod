import { z } from 'zod';

export const campaignCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type CampaignCustomizerServiceType = z.infer<typeof campaignCustomizerServiceType>;
