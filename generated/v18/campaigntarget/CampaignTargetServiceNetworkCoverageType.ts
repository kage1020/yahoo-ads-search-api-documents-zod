import { z } from 'zod';

export const campaignTargetServiceNetworkCoverageType = z.enum(["YAHOO_SEARCH", "SEARCH_NETWORK", "UNKNOWN"]).nullable();

export type CampaignTargetServiceNetworkCoverageType = z.infer<typeof campaignTargetServiceNetworkCoverageType>;
