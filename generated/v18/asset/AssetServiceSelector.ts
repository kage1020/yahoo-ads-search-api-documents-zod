import { z } from 'zod';

import { assetServiceType } from './AssetServiceType';
import { assetServiceApprovalStatus } from './AssetServiceApprovalStatus';

export const assetServiceSelector = z.object({
  accountId: z.number().int(),
  assetIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(assetServiceType).nullable(),
  approvalStatuses: z.array(assetServiceApprovalStatus).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AssetServiceSelector = z.infer<typeof assetServiceSelector>;
