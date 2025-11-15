import { z } from 'zod';

import { AssetServiceSchedule } from './AssetServiceSchedule';

export const AssetServiceQuickLinkAsset = z.object({
  linkText: z.string().nullable(),
  reviewLinkText: z.string().nullable(),
  description1: z.string().nullable(),
  reviewDescription1: z.string().nullable(),
  description2: z.string().nullable(),
  reviewDescription2: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  schedules: z.array(AssetServiceSchedule).nullable()
}).nullable();

export type AssetServiceQuickLinkAsset = z.infer<typeof AssetServiceQuickLinkAsset>;
