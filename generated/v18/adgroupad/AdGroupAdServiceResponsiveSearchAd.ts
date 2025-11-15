import { z } from 'zod';

import { adGroupAdServiceRequiredAssets } from './AdGroupAdServiceRequiredAssets';
import { adGroupAdServiceHeadlineTextAsset } from './AdGroupAdServiceHeadlineTextAsset';
import { adGroupAdServiceDescriptionTextAsset } from './AdGroupAdServiceDescriptionTextAsset';
import { adGroupAdServiceIsRemove } from './AdGroupAdServiceIsRemove';

export const adGroupAdServiceResponsiveSearchAd = z.object({
  requiredAssets: adGroupAdServiceRequiredAssets,
  headlines: z.array(adGroupAdServiceHeadlineTextAsset).nullable(),
  descriptions: z.array(adGroupAdServiceDescriptionTextAsset).nullable(),
  path1: z.string().nullable(),
  isRemovePath1: adGroupAdServiceIsRemove,
  path2: z.string().nullable(),
  isRemovePath2: adGroupAdServiceIsRemove,
  reviewHeadlines: z.array(adGroupAdServiceHeadlineTextAsset).nullable(),
  reviewDescriptions: z.array(adGroupAdServiceDescriptionTextAsset).nullable(),
  reviewPath1: z.string().nullable(),
  reviewPath2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceResponsiveSearchAd = z.infer<typeof adGroupAdServiceResponsiveSearchAd>;
