import { z } from 'zod';

import { accountManagementServicePayment } from './AccountManagementServicePayment';
import { accountManagementServicePrefectureCode } from './AccountManagementServicePrefectureCode';
import { accountManagementServiceAutoTaggingEnabled } from './AccountManagementServiceAutoTaggingEnabled';
import { accountManagementServiceClient } from './AccountManagementServiceClient';
import { accountManagementServiceClientType } from './AccountManagementServiceClientType';
import { accountManagementServiceDeliveryStatus } from './AccountManagementServiceDeliveryStatus';
import { accountManagementServiceIsAdultAccount } from './AccountManagementServiceIsAdultAccount';
import { accountManagementServiceIsTestAccount } from './AccountManagementServiceIsTestAccount';
import { accountManagementServiceIsCancellationPending } from './AccountManagementServiceIsCancellationPending';
import { accountManagementServiceStatus } from './AccountManagementServiceStatus';

export const accountManagement = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountPayment: accountManagementServicePayment,
  agencyPersonName: z.string().nullable(),
  agencyPrefectureCode: accountManagementServicePrefectureCode,
  autoTaggingEnabled: accountManagementServiceAutoTaggingEnabled,
  client: accountManagementServiceClient,
  clientType: accountManagementServiceClientType,
  contactBizId: z.string().nullable(),
  deliveryStatus: accountManagementServiceDeliveryStatus,
  isAdultAccount: accountManagementServiceIsAdultAccount,
  isTestAccount: accountManagementServiceIsTestAccount,
  isCancellationPending: accountManagementServiceIsCancellationPending,
  status: accountManagementServiceStatus
}).nullable();

export type AccountManagement = z.infer<typeof accountManagement>;
