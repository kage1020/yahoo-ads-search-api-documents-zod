import { z } from 'zod';

import { abTestServiceCampaignUserStatus } from './AbTestServiceCampaignUserStatus';
import { abTestServiceCampaignTestType } from './AbTestServiceCampaignTestType';
import { abTestServiceCampaignIsDeleteFlg } from './AbTestServiceCampaignIsDeleteFlg';
import { abTestServiceIsRemoveFlg } from './AbTestServiceIsRemoveFlg';
import { abTestServiceStatus } from './AbTestServiceStatus';

export const abTest = z.object({
  accountId: z.number().int().nullable(),
  abTestId: z.number().int().nullable(),
  abTestName: z.string().nullable(),
  description: z.string().nullable(),
  suffix: z.string().nullable(),
  aCampaignId: z.number().int().nullable(),
  aCampaignName: z.string().nullable(),
  aCampaignUserStatus: abTestServiceCampaignUserStatus,
  aCampaignTestType: abTestServiceCampaignTestType,
  aCampaignIsDeleted: abTestServiceCampaignIsDeleteFlg,
  bCampaignId: z.number().int().nullable(),
  bCampaignName: z.string().nullable(),
  bCampaignUserStatus: abTestServiceCampaignUserStatus,
  bCampaignTestType: abTestServiceCampaignTestType,
  bCampaignIsDeleted: abTestServiceCampaignIsDeleteFlg,
  isRemoveDescription: abTestServiceIsRemoveFlg,
  endDate: z.string().nullable(),
  startDate: z.string().nullable(),
  status: abTestServiceStatus,
  errors: z.array(z.string().nullable()).nullable()
}).nullable();

export type AbTest = z.infer<typeof abTest>;
