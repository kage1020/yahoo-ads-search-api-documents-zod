import { z } from 'zod';

import { AdGroupAdServiceRequiredAssets } from './AdGroupAdServiceRequiredAssets';
import { AdGroupAdServiceHeadlineTextAsset } from './AdGroupAdServiceHeadlineTextAsset';
import { AdGroupAdServiceDescriptionTextAsset } from './AdGroupAdServiceDescriptionTextAsset';
import { AdGroupAdServiceIsRemove } from './AdGroupAdServiceIsRemove';

export const AdGroupAdServiceResponsiveSearchAd = z.object({
  requiredAssets: AdGroupAdServiceRequiredAssets,
  headlines: z.array(AdGroupAdServiceHeadlineTextAsset).nullable(),
  descriptions: z.array(AdGroupAdServiceDescriptionTextAsset).nullable(),
  path1: z.string().nullable(),
  isRemovePath1: AdGroupAdServiceIsRemove,
  path2: z.string().nullable(),
  isRemovePath2: AdGroupAdServiceIsRemove,
  reviewHeadlines: z.array(AdGroupAdServiceHeadlineTextAsset).nullable(),
  reviewDescriptions: z.array(AdGroupAdServiceDescriptionTextAsset).nullable(),
  reviewPath1: z.string().nullable(),
  reviewPath2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceResponsiveSearchAd = z.infer<typeof AdGroupAdServiceResponsiveSearchAd>;
