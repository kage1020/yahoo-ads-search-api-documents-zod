import { z } from 'zod';

export const CampaignTargetServiceNetworkCoverageType = z.enum(["YAHOO_SEARCH", "SEARCH_NETWORK", "UNKNOWN"]).nullable();

export type CampaignTargetServiceNetworkCoverageType = z.infer<typeof CampaignTargetServiceNetworkCoverageType>;
