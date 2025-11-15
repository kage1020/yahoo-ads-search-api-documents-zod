import { z } from 'zod';

import { accountServiceStatus } from './AccountServiceStatus';
import { accountServiceType } from './AccountServiceType';
import { accountServiceAutoTaggingEnabled } from './AccountServiceAutoTaggingEnabled';
import { accountServiceDeliveryStatus } from './AccountServiceDeliveryStatus';
import { accountServiceIsTestAccount } from './AccountServiceIsTestAccount';
import { accountServiceIsCancellationPending } from './AccountServiceIsCancellationPending';
import { accountServiceIsMccAccount } from './AccountServiceIsMccAccount';

export const account = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountStatus: accountServiceStatus,
  accountType: accountServiceType,
  autoTaggingEnabled: accountServiceAutoTaggingEnabled,
  deliveryStatus: accountServiceDeliveryStatus,
  isTestAccount: accountServiceIsTestAccount,
  isCancellationPending: accountServiceIsCancellationPending,
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  isMccAccount: accountServiceIsMccAccount,
  contactBizId: z.string().nullable()
}).nullable();

export type Account = z.infer<typeof account>;
