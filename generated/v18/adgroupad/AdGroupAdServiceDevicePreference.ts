import { z } from 'zod';

export const AdGroupAdServiceDevicePreference = z.enum(["SMART_PHONE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceDevicePreference = z.infer<typeof AdGroupAdServiceDevicePreference>;
