import { z } from 'zod';

import { adGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { adGroupAdServiceTextAd2 } from './AdGroupAdServiceTextAd2';
import { adGroupAdServiceAppAd } from './AdGroupAdServiceAppAd';
import { adGroupAdServiceExtendedTextAd } from './AdGroupAdServiceExtendedTextAd';
import { adGroupAdServiceDynamicSearchLinkedAd } from './AdGroupAdServiceDynamicSearchLinkedAd';
import { adGroupAdServiceResponsiveSearchAd } from './AdGroupAdServiceResponsiveSearchAd';
import { adGroupAdServiceIsRemove } from './AdGroupAdServiceIsRemove';
import { adGroupAdServiceCustomParameters } from './AdGroupAdServiceCustomParameters';
import { adGroupAdServiceDevicePreference } from './AdGroupAdServiceDevicePreference';

export const adGroupAdServiceAd = z.object({
  adType: adGroupAdServiceAdType,
  textAd2: adGroupAdServiceTextAd2,
  appAd: adGroupAdServiceAppAd,
  extendedTextAd: adGroupAdServiceExtendedTextAd,
  dynamicSearchLinkedAd: adGroupAdServiceDynamicSearchLinkedAd,
  responsiveSearchAd: adGroupAdServiceResponsiveSearchAd,
  finalUrl: z.string().nullable(),
  reviewFinalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  reviewSmartphoneFinalUrl: z.string().nullable(),
  isRemoveSmartphoneFinalUrl: adGroupAdServiceIsRemove,
  trackingUrl: z.string().nullable(),
  reviewTrackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: adGroupAdServiceIsRemove,
  customParameters: adGroupAdServiceCustomParameters,
  reviewCustomParameters: adGroupAdServiceCustomParameters,
  devicePreference: adGroupAdServiceDevicePreference,
  displayUrl: z.string().nullable(),
  url: z.string().nullable()
}).nullable();

export type AdGroupAdServiceAd = z.infer<typeof adGroupAdServiceAd>;
