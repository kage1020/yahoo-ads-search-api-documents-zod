import { z } from 'zod';

import { AccountManagementServicePayment } from './AccountManagementServicePayment';
import { AccountManagementServicePrefectureCode } from './AccountManagementServicePrefectureCode';
import { AccountManagementServiceAutoTaggingEnabled } from './AccountManagementServiceAutoTaggingEnabled';
import { AccountManagementServiceClient } from './AccountManagementServiceClient';
import { AccountManagementServiceClientType } from './AccountManagementServiceClientType';
import { AccountManagementServiceDeliveryStatus } from './AccountManagementServiceDeliveryStatus';
import { AccountManagementServiceIsAdultAccount } from './AccountManagementServiceIsAdultAccount';
import { AccountManagementServiceIsTestAccount } from './AccountManagementServiceIsTestAccount';
import { AccountManagementServiceIsCancellationPending } from './AccountManagementServiceIsCancellationPending';
import { AccountManagementServiceStatus } from './AccountManagementServiceStatus';

export const AccountManagement = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountPayment: AccountManagementServicePayment,
  agencyPersonName: z.string().nullable(),
  agencyPrefectureCode: AccountManagementServicePrefectureCode,
  autoTaggingEnabled: AccountManagementServiceAutoTaggingEnabled,
  client: AccountManagementServiceClient,
  clientType: AccountManagementServiceClientType,
  contactBizId: z.string().nullable(),
  deliveryStatus: AccountManagementServiceDeliveryStatus,
  isAdultAccount: AccountManagementServiceIsAdultAccount,
  isTestAccount: AccountManagementServiceIsTestAccount,
  isCancellationPending: AccountManagementServiceIsCancellationPending,
  status: AccountManagementServiceStatus
}).nullable();

export type AccountManagement = z.infer<typeof AccountManagement>;
