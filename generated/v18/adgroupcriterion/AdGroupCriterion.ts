import { z } from 'zod';

import { adGroupCriterionServiceBiddableAdGroupCriterion } from './AdGroupCriterionServiceBiddableAdGroupCriterion';
import { adGroupCriterionServiceCriterion } from './AdGroupCriterionServiceCriterion';
import { adGroupCriterionServiceLabel } from './AdGroupCriterionServiceLabel';
import { adGroupCriterionServiceUse } from './AdGroupCriterionServiceUse';
import { adGroupCriterionServiceTrademarkStatus } from './AdGroupCriterionServiceTrademarkStatus';

export const adGroupCriterion = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  biddableAdGroupCriterion: adGroupCriterionServiceBiddableAdGroupCriterion,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  criterion: adGroupCriterionServiceCriterion,
  labels: z.array(adGroupCriterionServiceLabel).nullable(),
  use: adGroupCriterionServiceUse,
  trademarkStatus: adGroupCriterionServiceTrademarkStatus,
  invalidedTrademarks: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupCriterion = z.infer<typeof adGroupCriterion>;
