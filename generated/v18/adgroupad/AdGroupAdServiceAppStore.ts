import { z } from 'zod';

export const AdGroupAdServiceAppStore = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AdGroupAdServiceAppStore = z.infer<typeof AdGroupAdServiceAppStore>;
