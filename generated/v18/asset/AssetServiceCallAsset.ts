import { z } from 'zod';

import { AssetServiceSchedule } from './AssetServiceSchedule';

export const AssetServiceCallAsset = z.object({
  phoneNumber: z.string().nullable(),
  reviewPhoneNumber: z.string().nullable(),
  schedules: z.array(AssetServiceSchedule).nullable()
}).nullable();

export type AssetServiceCallAsset = z.infer<typeof AssetServiceCallAsset>;
