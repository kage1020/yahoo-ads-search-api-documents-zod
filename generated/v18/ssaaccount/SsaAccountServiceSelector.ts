import { z } from 'zod';

import { SsaAccountServiceStatus } from './SsaAccountServiceStatus';
import { SsaAccountServiceType } from './SsaAccountServiceType';

export const SsaAccountServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountName: z.string().nullable(),
  accountStatuses: z.array(SsaAccountServiceStatus).nullable(),
  accountTypes: z.array(SsaAccountServiceType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type SsaAccountServiceSelector = z.infer<typeof SsaAccountServiceSelector>;
