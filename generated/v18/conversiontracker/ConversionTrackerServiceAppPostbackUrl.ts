import { z } from 'zod';

import { conversionTrackerServiceIsRemoveUrl } from './ConversionTrackerServiceIsRemoveUrl';

export const conversionTrackerServiceAppPostbackUrl = z.object({
  isRemoveUrl: conversionTrackerServiceIsRemoveUrl,
  url: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceAppPostbackUrl = z.infer<typeof conversionTrackerServiceAppPostbackUrl>;
