import { z } from 'zod';

export const CampaignWebpageServiceWebpageOperator = z.enum(["CONTAINS", "EQUALS", "UNKNOWN"]).nullable();

export type CampaignWebpageServiceWebpageOperator = z.infer<typeof CampaignWebpageServiceWebpageOperator>;
