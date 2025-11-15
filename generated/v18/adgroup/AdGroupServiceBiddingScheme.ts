import { z } from 'zod';

import { adGroupServiceCampaignBiddingStrategyType } from './AdGroupServiceCampaignBiddingStrategyType';
import { adGroupServiceCpcBiddingScheme } from './AdGroupServiceCpcBiddingScheme';
import { adGroupServiceTargetCpaBiddingScheme } from './AdGroupServiceTargetCpaBiddingScheme';
import { adGroupServiceTargetRoasBiddingScheme } from './AdGroupServiceTargetRoasBiddingScheme';
import { adGroupServiceMaximizeConversionsBiddingScheme } from './AdGroupServiceMaximizeConversionsBiddingScheme';
import { adGroupServiceMaximizeConversionValueBiddingScheme } from './AdGroupServiceMaximizeConversionValueBiddingScheme';

export const adGroupServiceBiddingScheme = z.object({
  campaignBiddingStrategyType: adGroupServiceCampaignBiddingStrategyType,
  cpcBiddingScheme: adGroupServiceCpcBiddingScheme,
  targetCpaBiddingScheme: adGroupServiceTargetCpaBiddingScheme,
  targetRoasBiddingScheme: adGroupServiceTargetRoasBiddingScheme,
  maximizeConversionsBiddingScheme: adGroupServiceMaximizeConversionsBiddingScheme,
  maximizeConversionValueBiddingScheme: adGroupServiceMaximizeConversionValueBiddingScheme
}).nullable();

export type AdGroupServiceBiddingScheme = z.infer<typeof adGroupServiceBiddingScheme>;
