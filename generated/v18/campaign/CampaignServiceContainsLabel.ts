import { z } from 'zod';

export const CampaignServiceContainsLabel = z.boolean().nullable();

export type CampaignServiceContainsLabel = z.infer<typeof CampaignServiceContainsLabel>;
