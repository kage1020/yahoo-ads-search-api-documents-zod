import { z } from 'zod';

export const campaignServiceBudgetDeliveryMethod = z.enum(["STANDARD", "ACCELERATED", "UNKNOWN"]).nullable();

export type CampaignServiceBudgetDeliveryMethod = z.infer<typeof campaignServiceBudgetDeliveryMethod>;
