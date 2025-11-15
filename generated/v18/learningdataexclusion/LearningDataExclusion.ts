import { z } from 'zod';

import { LearningDataExclusionServiceDevices } from './LearningDataExclusionServiceDevices';

export const LearningDataExclusion = z.object({
  accountId: z.number().int(),
  learningDataExclusionName: z.string().nullable(),
  description: z.string().nullable(),
  learningDataExclusionId: z.number().int().nullable(),
  devices: z.array(LearningDataExclusionServiceDevices).nullable(),
  startDateTime: z.string().nullable(),
  endDateTime: z.string().nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type LearningDataExclusion = z.infer<typeof LearningDataExclusion>;
