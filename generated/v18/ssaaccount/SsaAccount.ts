import { z } from 'zod';

import { ssaAccountServiceStatus } from './SsaAccountServiceStatus';
import { ssaAccountServiceType } from './SsaAccountServiceType';
import { ssaAccountServiceAutoTaggingEnabled } from './SsaAccountServiceAutoTaggingEnabled';
import { ssaAccountServiceDeliveryStatus } from './SsaAccountServiceDeliveryStatus';
import { ssaAccountServiceIsCancellationPending } from './SsaAccountServiceIsCancellationPending';

export const ssaAccount = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountStatus: ssaAccountServiceStatus,
  accountType: ssaAccountServiceType,
  autoTaggingEnabled: ssaAccountServiceAutoTaggingEnabled,
  deliveryStatus: ssaAccountServiceDeliveryStatus,
  isCancellationPending: ssaAccountServiceIsCancellationPending,
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  contactBizId: z.string().nullable()
}).nullable();

export type SsaAccount = z.infer<typeof ssaAccount>;
