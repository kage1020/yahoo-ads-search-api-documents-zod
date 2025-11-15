import { z } from 'zod';

import { AdGroupServiceCampaignBiddingStrategyType } from './AdGroupServiceCampaignBiddingStrategyType';
import { AdGroupServiceCpcBiddingScheme } from './AdGroupServiceCpcBiddingScheme';
import { AdGroupServiceTargetCpaBiddingScheme } from './AdGroupServiceTargetCpaBiddingScheme';
import { AdGroupServiceTargetRoasBiddingScheme } from './AdGroupServiceTargetRoasBiddingScheme';
import { AdGroupServiceMaximizeConversionsBiddingScheme } from './AdGroupServiceMaximizeConversionsBiddingScheme';
import { AdGroupServiceMaximizeConversionValueBiddingScheme } from './AdGroupServiceMaximizeConversionValueBiddingScheme';

export const AdGroupServiceBiddingScheme = z.object({
  campaignBiddingStrategyType: AdGroupServiceCampaignBiddingStrategyType,
  cpcBiddingScheme: AdGroupServiceCpcBiddingScheme,
  targetCpaBiddingScheme: AdGroupServiceTargetCpaBiddingScheme,
  targetRoasBiddingScheme: AdGroupServiceTargetRoasBiddingScheme,
  maximizeConversionsBiddingScheme: AdGroupServiceMaximizeConversionsBiddingScheme,
  maximizeConversionValueBiddingScheme: AdGroupServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type AdGroupServiceBiddingScheme = z.infer<typeof AdGroupServiceBiddingScheme>;
