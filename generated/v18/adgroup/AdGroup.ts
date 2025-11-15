import { z } from 'zod';

import { adGroupServiceBiddingStrategyConfiguration } from './AdGroupServiceBiddingStrategyConfiguration';
import { adGroupServiceFrequentlyRunBetterPerformingAdsMode } from './AdGroupServiceFrequentlyRunBetterPerformingAdsMode';
import { adGroupServiceCustomParameters } from './AdGroupServiceCustomParameters';
import { adGroupServiceLabel } from './AdGroupServiceLabel';
import { adGroupServiceSettings } from './AdGroupServiceSettings';
import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';
import { adGroupServiceUrlReviewData } from './AdGroupServiceUrlReviewData';
import { adGroupServiceUserStatus } from './AdGroupServiceUserStatus';

export const adGroup = z.object({
  accountId: z.number().int().nullable(),
  biddingStrategyConfiguration: adGroupServiceBiddingStrategyConfiguration,
  frequentlyRunBetterPerformingAdsMode: adGroupServiceFrequentlyRunBetterPerformingAdsMode,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  customParameters: adGroupServiceCustomParameters,
  labels: z.array(adGroupServiceLabel).nullable(),
  settings: adGroupServiceSettings,
  trackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: adGroupServiceIsRemoveFlg,
  urlReviewData: adGroupServiceUrlReviewData,
  userStatus: adGroupServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroup = z.infer<typeof adGroup>;
