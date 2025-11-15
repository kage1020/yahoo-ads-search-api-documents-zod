import { z } from 'zod';

import { AccountManagementServiceEnterpriseType } from './AccountManagementServiceEnterpriseType';
import { AccountManagementServiceEnterpriseTypePosition } from './AccountManagementServiceEnterpriseTypePosition';
import { AccountManagementServicePrefectureCode } from './AccountManagementServicePrefectureCode';
import { AccountManagementServiceUrlType } from './AccountManagementServiceUrlType';

export const AccountManagementServiceClient = z.object({
  building: z.string().nullable(),
  city: z.string().nullable(),
  clientPersonName: z.string().nullable(),
  companyName: z.string().nullable(),
  companyNameKana: z.string().nullable(),
  corporateNumber: z.number().int().nullable(),
  enterpriseType: AccountManagementServiceEnterpriseType,
  enterpriseTypePosition: AccountManagementServiceEnterpriseTypePosition,
  phoneNumber: z.string().nullable(),
  prefectureCode: AccountManagementServicePrefectureCode,
  street1: z.string().nullable(),
  street2: z.string().nullable(),
  url: z.string().nullable(),
  urlType: AccountManagementServiceUrlType,
  zip: z.string().nullable()
}).nullable();

export type AccountManagementServiceClient = z.infer<typeof AccountManagementServiceClient>;
