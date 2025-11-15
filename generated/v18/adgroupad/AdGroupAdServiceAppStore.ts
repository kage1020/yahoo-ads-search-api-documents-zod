import { z } from 'zod';

export const adGroupAdServiceAppStore = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AdGroupAdServiceAppStore = z.infer<typeof adGroupAdServiceAppStore>;
