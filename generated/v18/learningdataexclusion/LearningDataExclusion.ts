import { z } from 'zod';

import { learningDataExclusionServiceDevices } from './LearningDataExclusionServiceDevices';

export const learningDataExclusion = z.object({
  accountId: z.number().int(),
  learningDataExclusionName: z.string().nullable(),
  description: z.string().nullable(),
  learningDataExclusionId: z.number().int().nullable(),
  devices: z.array(learningDataExclusionServiceDevices).nullable(),
  startDateTime: z.string().nullable(),
  endDateTime: z.string().nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type LearningDataExclusion = z.infer<typeof learningDataExclusion>;
