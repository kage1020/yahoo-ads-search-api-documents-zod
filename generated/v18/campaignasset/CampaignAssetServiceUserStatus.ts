import { z } from 'zod';

export const CampaignAssetServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignAssetServiceUserStatus = z.infer<typeof CampaignAssetServiceUserStatus>;
