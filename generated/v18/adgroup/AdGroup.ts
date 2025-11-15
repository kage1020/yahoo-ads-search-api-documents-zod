import { z } from 'zod';

import { AdGroupServiceBiddingStrategyConfiguration } from './AdGroupServiceBiddingStrategyConfiguration';
import { AdGroupServiceFrequentlyRunBetterPerformingAdsMode } from './AdGroupServiceFrequentlyRunBetterPerformingAdsMode';
import { AdGroupServiceCustomParameters } from './AdGroupServiceCustomParameters';
import { AdGroupServiceLabel } from './AdGroupServiceLabel';
import { AdGroupServiceSettings } from './AdGroupServiceSettings';
import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';
import { AdGroupServiceUrlReviewData } from './AdGroupServiceUrlReviewData';
import { AdGroupServiceUserStatus } from './AdGroupServiceUserStatus';

export const AdGroup = z.object({
  accountId: z.number().int().nullable(),
  biddingStrategyConfiguration: AdGroupServiceBiddingStrategyConfiguration,
  frequentlyRunBetterPerformingAdsMode: AdGroupServiceFrequentlyRunBetterPerformingAdsMode,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  customParameters: AdGroupServiceCustomParameters,
  labels: z.array(AdGroupServiceLabel).nullable(),
  settings: AdGroupServiceSettings,
  trackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: AdGroupServiceIsRemoveFlg,
  urlReviewData: AdGroupServiceUrlReviewData,
  userStatus: AdGroupServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroup = z.infer<typeof AdGroup>;
