import { z } from 'zod';

export const campaignWebpageServiceWebpageOperator = z.enum(["CONTAINS", "EQUALS", "UNKNOWN"]).nullable();

export type CampaignWebpageServiceWebpageOperator = z.infer<typeof campaignWebpageServiceWebpageOperator>;
