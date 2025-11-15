import { z } from 'zod';

import { CampaignServiceAppOsType } from './CampaignServiceAppOsType';
import { CampaignServiceBiddingStrategy } from './CampaignServiceBiddingStrategy';
import { CampaignServiceBiddingStrategyFailedReason } from './CampaignServiceBiddingStrategyFailedReason';
import { CampaignServiceBudget } from './CampaignServiceBudget';
import { CampaignServiceConversionOptimizerEligibility } from './CampaignServiceConversionOptimizerEligibility';
import { CampaignServiceCustomParameters } from './CampaignServiceCustomParameters';
import { CampaignServiceLabel } from './CampaignServiceLabel';
import { CampaignServiceServingStatus } from './CampaignServiceServingStatus';
import { CampaignServiceSettings } from './CampaignServiceSettings';
import { CampaignServiceType } from './CampaignServiceType';
import { CampaignServiceUrlReviewData } from './CampaignServiceUrlReviewData';
import { CampaignServiceUserStatus } from './CampaignServiceUserStatus';
import { CampaignServiceConversionSetting } from './CampaignServiceConversionSetting';

export const Campaign = z.object({
  accountId: z.number().int().nullable(),
  appId: z.string().nullable(),
  appOsType: CampaignServiceAppOsType,
  biddingStrategyConfiguration: CampaignServiceBiddingStrategy,
  biddingStrategyFailedReason: CampaignServiceBiddingStrategyFailedReason,
  budget: CampaignServiceBudget,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  conversionOptimizerEligibility: CampaignServiceConversionOptimizerEligibility,
  customParameters: CampaignServiceCustomParameters,
  endDate: z.string().nullable(),
  failedBiddingStrategyConfiguration: CampaignServiceBiddingStrategy,
  labels: z.array(CampaignServiceLabel).nullable(),
  servingStatus: CampaignServiceServingStatus,
  settings: z.array(CampaignServiceSettings).nullable(),
  startDate: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  type: CampaignServiceType,
  urlReviewData: CampaignServiceUrlReviewData,
  userStatus: CampaignServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable(),
  conversionSetting: CampaignServiceConversionSetting
}).nullable();

export type Campaign = z.infer<typeof Campaign>;
