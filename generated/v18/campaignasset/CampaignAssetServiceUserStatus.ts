import { z } from 'zod';

export const campaignAssetServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignAssetServiceUserStatus = z.infer<typeof campaignAssetServiceUserStatus>;
