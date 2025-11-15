import { z } from 'zod';

import { SsaAccountServiceStatus } from './SsaAccountServiceStatus';
import { SsaAccountServiceType } from './SsaAccountServiceType';
import { SsaAccountServiceAutoTaggingEnabled } from './SsaAccountServiceAutoTaggingEnabled';
import { SsaAccountServiceDeliveryStatus } from './SsaAccountServiceDeliveryStatus';
import { SsaAccountServiceIsCancellationPending } from './SsaAccountServiceIsCancellationPending';

export const SsaAccount = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountStatus: SsaAccountServiceStatus,
  accountType: SsaAccountServiceType,
  autoTaggingEnabled: SsaAccountServiceAutoTaggingEnabled,
  deliveryStatus: SsaAccountServiceDeliveryStatus,
  isCancellationPending: SsaAccountServiceIsCancellationPending,
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  contactBizId: z.string().nullable()
}).nullable();

export type SsaAccount = z.infer<typeof SsaAccount>;
