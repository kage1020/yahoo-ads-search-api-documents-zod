import { z } from 'zod';

import { AssetServiceSchedule } from './AssetServiceSchedule';

export const AssetServiceCalloutAsset = z.object({
  calloutText: z.string().nullable(),
  reviewCalloutText: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  schedules: z.array(AssetServiceSchedule).nullable()
}).nullable();

export type AssetServiceCalloutAsset = z.infer<typeof AssetServiceCalloutAsset>;
