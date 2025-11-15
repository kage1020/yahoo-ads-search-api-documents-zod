import { z } from 'zod';

import { assetServiceFileType } from './AssetServiceFileType';

export const assetServiceFaviconAsset = z.object({
  faviconName: z.string().nullable(),
  data: z.string().nullable(),
  aspectRatio: z.string().nullable(),
  fileSize: z.number().int().nullable(),
  height: z.number().int().nullable(),
  width: z.number().int().nullable(),
  fileType: assetServiceFileType
}).nullable();

export type AssetServiceFaviconAsset = z.infer<typeof assetServiceFaviconAsset>;
