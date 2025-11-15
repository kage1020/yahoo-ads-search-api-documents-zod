import { z } from 'zod';

import { assetServiceSchedule } from './AssetServiceSchedule';

export const assetServiceCalloutAsset = z.object({
  calloutText: z.string().nullable(),
  reviewCalloutText: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  schedules: z.array(assetServiceSchedule).nullable()
}).nullable();

export type AssetServiceCalloutAsset = z.infer<typeof assetServiceCalloutAsset>;
