import { z } from 'zod';

import { AssetServiceFileType } from './AssetServiceFileType';

export const AssetServiceImageAsset = z.object({
  imageName: z.string().nullable(),
  data: z.string().nullable(),
  aspectRatio: z.string().nullable(),
  fileSize: z.number().int().nullable(),
  height: z.number().int().nullable(),
  width: z.number().int().nullable(),
  fileType: AssetServiceFileType
}).nullable();

export type AssetServiceImageAsset = z.infer<typeof AssetServiceImageAsset>;
