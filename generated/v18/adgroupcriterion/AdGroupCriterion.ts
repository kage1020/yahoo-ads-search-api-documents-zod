import { z } from 'zod';

import { AdGroupCriterionServiceBiddableAdGroupCriterion } from './AdGroupCriterionServiceBiddableAdGroupCriterion';
import { AdGroupCriterionServiceCriterion } from './AdGroupCriterionServiceCriterion';
import { AdGroupCriterionServiceLabel } from './AdGroupCriterionServiceLabel';
import { AdGroupCriterionServiceUse } from './AdGroupCriterionServiceUse';
import { AdGroupCriterionServiceTrademarkStatus } from './AdGroupCriterionServiceTrademarkStatus';

export const AdGroupCriterion = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  biddableAdGroupCriterion: AdGroupCriterionServiceBiddableAdGroupCriterion,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  criterion: AdGroupCriterionServiceCriterion,
  labels: z.array(AdGroupCriterionServiceLabel).nullable(),
  use: AdGroupCriterionServiceUse,
  trademarkStatus: AdGroupCriterionServiceTrademarkStatus,
  invalidedTrademarks: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupCriterion = z.infer<typeof AdGroupCriterion>;
