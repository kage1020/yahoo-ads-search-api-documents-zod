import { z } from 'zod';

import { assetServiceSchedule } from './AssetServiceSchedule';

export const assetServiceQuickLinkAsset = z.object({
  linkText: z.string().nullable(),
  reviewLinkText: z.string().nullable(),
  description1: z.string().nullable(),
  reviewDescription1: z.string().nullable(),
  description2: z.string().nullable(),
  reviewDescription2: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  schedules: z.array(assetServiceSchedule).nullable()
}).nullable();

export type AssetServiceQuickLinkAsset = z.infer<typeof assetServiceQuickLinkAsset>;
