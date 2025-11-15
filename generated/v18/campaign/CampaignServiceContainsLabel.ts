import { z } from 'zod';

export const campaignServiceContainsLabel = z.boolean().nullable();

export type CampaignServiceContainsLabel = z.infer<typeof campaignServiceContainsLabel>;
