import { z } from 'zod';

import { RetargetingListServiceClosingReason } from './RetargetingListServiceClosingReason';
import { RetargetingListServiceDefaultTargetList } from './RetargetingListServiceDefaultTargetList';
import { RetargetingListServiceLogicalTargetList } from './RetargetingListServiceLogicalTargetList';
import { RetargetingListServiceReachStorageStatus } from './RetargetingListServiceReachStorageStatus';
import { RetargetingListServiceRetargetingAccountStatus } from './RetargetingListServiceRetargetingAccountStatus';
import { RetargetingListServiceRuleBaseTargetList } from './RetargetingListServiceRuleBaseTargetList';
import { RetargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';
import { RetargetingListServiceTargetListType } from './RetargetingListServiceTargetListType';

export const RetargetingListServiceTargetingList = z.object({
  accountId: z.number().int().nullable(),
  closingReason: RetargetingListServiceClosingReason,
  defaultTargetList: RetargetingListServiceDefaultTargetList,
  logicalTargetList: RetargetingListServiceLogicalTargetList,
  reach: z.number().int().nullable(),
  reachStorageSpan: z.number().int().nullable(),
  reachStorageStatus: RetargetingListServiceReachStorageStatus,
  retargetingAccountStatus: RetargetingListServiceRetargetingAccountStatus,
  ruleBaseTargetList: RetargetingListServiceRuleBaseTargetList,
  targetListDescription: z.string().nullable(),
  targetListId: z.number().int().nullable(),
  targetListName: z.string().nullable(),
  targetListOwner: RetargetingListServiceTargetListOwner,
  targetListTrackId: z.number().int().nullable(),
  targetListType: RetargetingListServiceTargetListType
}).nullable();

export type RetargetingListServiceTargetingList = z.infer<typeof RetargetingListServiceTargetingList>;
