import { z } from 'zod';

import { AbTestServiceCampaignUserStatus } from './AbTestServiceCampaignUserStatus';
import { AbTestServiceCampaignTestType } from './AbTestServiceCampaignTestType';
import { AbTestServiceCampaignIsDeleteFlg } from './AbTestServiceCampaignIsDeleteFlg';
import { AbTestServiceIsRemoveFlg } from './AbTestServiceIsRemoveFlg';
import { AbTestServiceStatus } from './AbTestServiceStatus';

export const AbTest = z.object({
  accountId: z.number().int().nullable(),
  abTestId: z.number().int().nullable(),
  abTestName: z.string().nullable(),
  description: z.string().nullable(),
  suffix: z.string().nullable(),
  aCampaignId: z.number().int().nullable(),
  aCampaignName: z.string().nullable(),
  aCampaignUserStatus: AbTestServiceCampaignUserStatus,
  aCampaignTestType: AbTestServiceCampaignTestType,
  aCampaignIsDeleted: AbTestServiceCampaignIsDeleteFlg,
  bCampaignId: z.number().int().nullable(),
  bCampaignName: z.string().nullable(),
  bCampaignUserStatus: AbTestServiceCampaignUserStatus,
  bCampaignTestType: AbTestServiceCampaignTestType,
  bCampaignIsDeleted: AbTestServiceCampaignIsDeleteFlg,
  isRemoveDescription: AbTestServiceIsRemoveFlg,
  endDate: z.string().nullable(),
  startDate: z.string().nullable(),
  status: AbTestServiceStatus,
  errors: z.array(z.string().nullable()).nullable()
}).nullable();

export type AbTest = z.infer<typeof AbTest>;
