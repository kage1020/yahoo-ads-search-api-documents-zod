import { z } from 'zod';

import { retargetingListServiceClosingReason } from './RetargetingListServiceClosingReason';
import { retargetingListServiceDefaultTargetList } from './RetargetingListServiceDefaultTargetList';
import { retargetingListServiceLogicalTargetList } from './RetargetingListServiceLogicalTargetList';
import { retargetingListServiceReachStorageStatus } from './RetargetingListServiceReachStorageStatus';
import { retargetingListServiceRetargetingAccountStatus } from './RetargetingListServiceRetargetingAccountStatus';
import { retargetingListServiceRuleBaseTargetList } from './RetargetingListServiceRuleBaseTargetList';
import { retargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';
import { retargetingListServiceTargetListType } from './RetargetingListServiceTargetListType';

export const retargetingListServiceTargetingList = z.object({
  accountId: z.number().int().nullable(),
  closingReason: retargetingListServiceClosingReason,
  defaultTargetList: retargetingListServiceDefaultTargetList,
  logicalTargetList: retargetingListServiceLogicalTargetList,
  reach: z.number().int().nullable(),
  reachStorageSpan: z.number().int().nullable(),
  reachStorageStatus: retargetingListServiceReachStorageStatus,
  retargetingAccountStatus: retargetingListServiceRetargetingAccountStatus,
  ruleBaseTargetList: retargetingListServiceRuleBaseTargetList,
  targetListDescription: z.string().nullable(),
  targetListId: z.number().int().nullable(),
  targetListName: z.string().nullable(),
  targetListOwner: retargetingListServiceTargetListOwner,
  targetListTrackId: z.number().int().nullable(),
  targetListType: retargetingListServiceTargetListType
}).nullable();

export type RetargetingListServiceTargetingList = z.infer<typeof retargetingListServiceTargetingList>;
