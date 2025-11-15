import { z } from 'zod';

import { accountManagementServiceEnterpriseType } from './AccountManagementServiceEnterpriseType';
import { accountManagementServiceEnterpriseTypePosition } from './AccountManagementServiceEnterpriseTypePosition';
import { accountManagementServicePrefectureCode } from './AccountManagementServicePrefectureCode';
import { accountManagementServiceUrlType } from './AccountManagementServiceUrlType';

export const accountManagementServiceClient = z.object({
  building: z.string().nullable(),
  city: z.string().nullable(),
  clientPersonName: z.string().nullable(),
  companyName: z.string().nullable(),
  companyNameKana: z.string().nullable(),
  corporateNumber: z.number().int().nullable(),
  enterpriseType: accountManagementServiceEnterpriseType,
  enterpriseTypePosition: accountManagementServiceEnterpriseTypePosition,
  phoneNumber: z.string().nullable(),
  prefectureCode: accountManagementServicePrefectureCode,
  street1: z.string().nullable(),
  street2: z.string().nullable(),
  url: z.string().nullable(),
  urlType: accountManagementServiceUrlType,
  zip: z.string().nullable()
}).nullable();

export type AccountManagementServiceClient = z.infer<typeof accountManagementServiceClient>;
