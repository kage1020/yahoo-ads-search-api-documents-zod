import { z } from 'zod';

import { CampaignServiceBiddingStrategyType } from './CampaignServiceBiddingStrategyType';
import { CampaignServiceTargetCpaBiddingScheme } from './CampaignServiceTargetCpaBiddingScheme';
import { CampaignServiceTargetRoasBiddingScheme } from './CampaignServiceTargetRoasBiddingScheme';
import { CampaignServiceMaximizeClicksBiddingScheme } from './CampaignServiceMaximizeClicksBiddingScheme';
import { CampaignServiceTargetImpressionShareScheme } from './CampaignServiceTargetImpressionShareScheme';
import { CampaignServiceMaximizeConversionsBiddingScheme } from './CampaignServiceMaximizeConversionsBiddingScheme';
import { CampaignServiceMaximizeConversionValueBiddingScheme } from './CampaignServiceMaximizeConversionValueBiddingScheme';

export const CampaignServiceBiddingScheme = z.object({
  biddingStrategyType: CampaignServiceBiddingStrategyType,
  targetCpaBiddingScheme: CampaignServiceTargetCpaBiddingScheme,
  targetRoasBiddingScheme: CampaignServiceTargetRoasBiddingScheme,
  maximizeClicksBiddingScheme: CampaignServiceMaximizeClicksBiddingScheme,
  targetImpressionShareScheme: CampaignServiceTargetImpressionShareScheme,
  maximizeConversionsBiddingScheme: CampaignServiceMaximizeConversionsBiddingScheme,
  maximizeConversionValueBiddingScheme: CampaignServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type CampaignServiceBiddingScheme = z.infer<typeof CampaignServiceBiddingScheme>;
