import { z } from 'zod';

import { AdGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { AdGroupAdServiceTextAd2 } from './AdGroupAdServiceTextAd2';
import { AdGroupAdServiceAppAd } from './AdGroupAdServiceAppAd';
import { AdGroupAdServiceExtendedTextAd } from './AdGroupAdServiceExtendedTextAd';
import { AdGroupAdServiceDynamicSearchLinkedAd } from './AdGroupAdServiceDynamicSearchLinkedAd';
import { AdGroupAdServiceResponsiveSearchAd } from './AdGroupAdServiceResponsiveSearchAd';
import { AdGroupAdServiceIsRemove } from './AdGroupAdServiceIsRemove';
import { AdGroupAdServiceCustomParameters } from './AdGroupAdServiceCustomParameters';
import { AdGroupAdServiceDevicePreference } from './AdGroupAdServiceDevicePreference';

export const AdGroupAdServiceAd = z.object({
  adType: AdGroupAdServiceAdType,
  textAd2: AdGroupAdServiceTextAd2,
  appAd: AdGroupAdServiceAppAd,
  extendedTextAd: AdGroupAdServiceExtendedTextAd,
  dynamicSearchLinkedAd: AdGroupAdServiceDynamicSearchLinkedAd,
  responsiveSearchAd: AdGroupAdServiceResponsiveSearchAd,
  finalUrl: z.string().nullable(),
  reviewFinalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  reviewSmartphoneFinalUrl: z.string().nullable(),
  isRemoveSmartphoneFinalUrl: AdGroupAdServiceIsRemove,
  trackingUrl: z.string().nullable(),
  reviewTrackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: AdGroupAdServiceIsRemove,
  customParameters: AdGroupAdServiceCustomParameters,
  reviewCustomParameters: AdGroupAdServiceCustomParameters,
  devicePreference: AdGroupAdServiceDevicePreference,
  displayUrl: z.string().nullable(),
  url: z.string().nullable()
}).nullable();

export type AdGroupAdServiceAd = z.infer<typeof AdGroupAdServiceAd>;
