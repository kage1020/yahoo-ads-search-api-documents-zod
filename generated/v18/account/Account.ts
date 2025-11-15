import { z } from 'zod';

import { AccountServiceStatus } from './AccountServiceStatus';
import { AccountServiceType } from './AccountServiceType';
import { AccountServiceAutoTaggingEnabled } from './AccountServiceAutoTaggingEnabled';
import { AccountServiceDeliveryStatus } from './AccountServiceDeliveryStatus';
import { AccountServiceIsTestAccount } from './AccountServiceIsTestAccount';
import { AccountServiceIsCancellationPending } from './AccountServiceIsCancellationPending';
import { AccountServiceIsMccAccount } from './AccountServiceIsMccAccount';

export const Account = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountStatus: AccountServiceStatus,
  accountType: AccountServiceType,
  autoTaggingEnabled: AccountServiceAutoTaggingEnabled,
  deliveryStatus: AccountServiceDeliveryStatus,
  isTestAccount: AccountServiceIsTestAccount,
  isCancellationPending: AccountServiceIsCancellationPending,
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  isMccAccount: AccountServiceIsMccAccount,
  contactBizId: z.string().nullable()
}).nullable();

export type Account = z.infer<typeof Account>;
