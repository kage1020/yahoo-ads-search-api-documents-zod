import { z } from 'zod';

export const CampaignServiceBudgetDeliveryMethod = z.enum(["STANDARD", "ACCELERATED", "UNKNOWN"]).nullable();

export type CampaignServiceBudgetDeliveryMethod = z.infer<typeof CampaignServiceBudgetDeliveryMethod>;
