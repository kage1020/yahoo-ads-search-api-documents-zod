import { z } from 'zod';

import { ConversionTrackerServiceIsRemoveUrl } from './ConversionTrackerServiceIsRemoveUrl';

export const ConversionTrackerServiceAppPostbackUrl = z.object({
  isRemoveUrl: ConversionTrackerServiceIsRemoveUrl,
  url: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceAppPostbackUrl = z.infer<typeof ConversionTrackerServiceAppPostbackUrl>;
