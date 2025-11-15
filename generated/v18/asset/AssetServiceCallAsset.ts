import { z } from 'zod';

import { assetServiceSchedule } from './AssetServiceSchedule';

export const assetServiceCallAsset = z.object({
  phoneNumber: z.string().nullable(),
  reviewPhoneNumber: z.string().nullable(),
  schedules: z.array(assetServiceSchedule).nullable()
}).nullable();

export type AssetServiceCallAsset = z.infer<typeof assetServiceCallAsset>;
