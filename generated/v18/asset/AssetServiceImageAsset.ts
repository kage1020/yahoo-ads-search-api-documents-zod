import { z } from 'zod';

import { assetServiceFileType } from './AssetServiceFileType';

export const assetServiceImageAsset = z.object({
  imageName: z.string().nullable(),
  data: z.string().nullable(),
  aspectRatio: z.string().nullable(),
  fileSize: z.number().int().nullable(),
  height: z.number().int().nullable(),
  width: z.number().int().nullable(),
  fileType: assetServiceFileType
}).nullable();

export type AssetServiceImageAsset = z.infer<typeof assetServiceImageAsset>;
