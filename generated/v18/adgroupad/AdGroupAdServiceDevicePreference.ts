import { z } from 'zod';

export const adGroupAdServiceDevicePreference = z.enum(["SMART_PHONE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceDevicePreference = z.infer<typeof adGroupAdServiceDevicePreference>;
