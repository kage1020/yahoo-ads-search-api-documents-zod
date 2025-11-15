import { z } from 'zod';

export const CampaignCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type CampaignCustomizerServiceType = z.infer<typeof CampaignCustomizerServiceType>;
