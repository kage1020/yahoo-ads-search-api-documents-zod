import { z } from 'zod';

export const campaignAssetServiceType = z.enum(["QUICKLINK", "CALL", "CALLOUT", "STRUCTURED_SNIPPET", "IMAGE", "FAVICON", "UNKNOWN"]).nullable();

export type CampaignAssetServiceType = z.infer<typeof campaignAssetServiceType>;
