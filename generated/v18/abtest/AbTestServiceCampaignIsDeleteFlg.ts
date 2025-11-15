import { z } from 'zod';

export const AbTestServiceCampaignIsDeleteFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AbTestServiceCampaignIsDeleteFlg = z.infer<typeof AbTestServiceCampaignIsDeleteFlg>;
