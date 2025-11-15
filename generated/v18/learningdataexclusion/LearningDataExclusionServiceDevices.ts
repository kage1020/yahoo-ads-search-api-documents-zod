import { z } from 'zod';

export const LearningDataExclusionServiceDevices = z.enum(["MOBILE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type LearningDataExclusionServiceDevices = z.infer<typeof LearningDataExclusionServiceDevices>;
