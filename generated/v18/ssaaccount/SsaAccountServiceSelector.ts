import { z } from 'zod';

import { ssaAccountServiceStatus } from './SsaAccountServiceStatus';
import { ssaAccountServiceType } from './SsaAccountServiceType';

export const ssaAccountServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountName: z.string().nullable(),
  accountStatuses: z.array(ssaAccountServiceStatus).nullable(),
  accountTypes: z.array(ssaAccountServiceType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type SsaAccountServiceSelector = z.infer<typeof ssaAccountServiceSelector>;
