import { z } from 'zod';

import { AssetServiceFileType } from './AssetServiceFileType';

export const AssetServiceFaviconAsset = z.object({
  faviconName: z.string().nullable(),
  data: z.string().nullable(),
  aspectRatio: z.string().nullable(),
  fileSize: z.number().int().nullable(),
  height: z.number().int().nullable(),
  width: z.number().int().nullable(),
  fileType: AssetServiceFileType
}).nullable();

export type AssetServiceFaviconAsset = z.infer<typeof AssetServiceFaviconAsset>;
