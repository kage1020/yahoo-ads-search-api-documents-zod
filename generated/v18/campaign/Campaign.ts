import { z } from 'zod';

import { campaignServiceAppOsType } from './CampaignServiceAppOsType';
import { campaignServiceBiddingStrategy } from './CampaignServiceBiddingStrategy';
import { campaignServiceBiddingStrategyFailedReason } from './CampaignServiceBiddingStrategyFailedReason';
import { campaignServiceBudget } from './CampaignServiceBudget';
import { campaignServiceConversionOptimizerEligibility } from './CampaignServiceConversionOptimizerEligibility';
import { campaignServiceCustomParameters } from './CampaignServiceCustomParameters';
import { campaignServiceLabel } from './CampaignServiceLabel';
import { campaignServiceServingStatus } from './CampaignServiceServingStatus';
import { campaignServiceSettings } from './CampaignServiceSettings';
import { campaignServiceType } from './CampaignServiceType';
import { campaignServiceUrlReviewData } from './CampaignServiceUrlReviewData';
import { campaignServiceUserStatus } from './CampaignServiceUserStatus';
import { campaignServiceConversionSetting } from './CampaignServiceConversionSetting';

export const campaign = z.object({
  accountId: z.number().int().nullable(),
  appId: z.string().nullable(),
  appOsType: campaignServiceAppOsType,
  biddingStrategyConfiguration: campaignServiceBiddingStrategy,
  biddingStrategyFailedReason: campaignServiceBiddingStrategyFailedReason,
  budget: campaignServiceBudget,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  conversionOptimizerEligibility: campaignServiceConversionOptimizerEligibility,
  customParameters: campaignServiceCustomParameters,
  endDate: z.string().nullable(),
  failedBiddingStrategyConfiguration: campaignServiceBiddingStrategy,
  labels: z.array(campaignServiceLabel).nullable(),
  servingStatus: campaignServiceServingStatus,
  settings: z.array(campaignServiceSettings).nullable(),
  startDate: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  type: campaignServiceType,
  urlReviewData: campaignServiceUrlReviewData,
  userStatus: campaignServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable(),
  conversionSetting: campaignServiceConversionSetting
}).nullable();

export type Campaign = z.infer<typeof campaign>;
