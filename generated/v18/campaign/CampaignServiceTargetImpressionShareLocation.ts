import { z } from 'zod';

export const campaignServiceTargetImpressionShareLocation = z.enum(["ANYWHERE_ON_PAGE", "TOP_OF_PAGE", "ABSOLUTE_TOP_OF_PAGE", "UNKNOWN"]).nullable();

export type CampaignServiceTargetImpressionShareLocation = z.infer<typeof campaignServiceTargetImpressionShareLocation>;
