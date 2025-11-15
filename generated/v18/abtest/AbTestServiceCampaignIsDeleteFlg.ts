import { z } from 'zod';

export const abTestServiceCampaignIsDeleteFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AbTestServiceCampaignIsDeleteFlg = z.infer<typeof abTestServiceCampaignIsDeleteFlg>;
