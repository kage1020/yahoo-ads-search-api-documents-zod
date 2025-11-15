import { z } from 'zod';

import { campaignServiceBiddingStrategyType } from './CampaignServiceBiddingStrategyType';
import { campaignServiceTargetCpaBiddingScheme } from './CampaignServiceTargetCpaBiddingScheme';
import { campaignServiceTargetRoasBiddingScheme } from './CampaignServiceTargetRoasBiddingScheme';
import { campaignServiceMaximizeClicksBiddingScheme } from './CampaignServiceMaximizeClicksBiddingScheme';
import { campaignServiceTargetImpressionShareScheme } from './CampaignServiceTargetImpressionShareScheme';
import { campaignServiceMaximizeConversionsBiddingScheme } from './CampaignServiceMaximizeConversionsBiddingScheme';
import { campaignServiceMaximizeConversionValueBiddingScheme } from './CampaignServiceMaximizeConversionValueBiddingScheme';

export const campaignServiceBiddingScheme = z.object({
  biddingStrategyType: campaignServiceBiddingStrategyType,
  targetCpaBiddingScheme: campaignServiceTargetCpaBiddingScheme,
  targetRoasBiddingScheme: campaignServiceTargetRoasBiddingScheme,
  maximizeClicksBiddingScheme: campaignServiceMaximizeClicksBiddingScheme,
  targetImpressionShareScheme: campaignServiceTargetImpressionShareScheme,
  maximizeConversionsBiddingScheme: campaignServiceMaximizeConversionsBiddingScheme,
  maximizeConversionValueBiddingScheme: campaignServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type CampaignServiceBiddingScheme = z.infer<typeof campaignServiceBiddingScheme>;
