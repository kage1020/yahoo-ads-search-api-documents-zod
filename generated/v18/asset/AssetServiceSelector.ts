import { z } from 'zod';

import { AssetServiceType } from './AssetServiceType';
import { AssetServiceApprovalStatus } from './AssetServiceApprovalStatus';

export const AssetServiceSelector = z.object({
  accountId: z.number().int(),
  assetIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(AssetServiceType).nullable(),
  approvalStatuses: z.array(AssetServiceApprovalStatus).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AssetServiceSelector = z.infer<typeof AssetServiceSelector>;
