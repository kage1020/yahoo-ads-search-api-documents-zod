import { z } from 'zod';

export const learningDataExclusionServiceDevices = z.enum(["MOBILE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type LearningDataExclusionServiceDevices = z.infer<typeof learningDataExclusionServiceDevices>;
