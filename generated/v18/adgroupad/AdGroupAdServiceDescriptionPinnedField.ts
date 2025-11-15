import { z } from 'zod';

export const adGroupAdServiceDescriptionPinnedField = z.enum(["UNSPECIFIED", "DESCRIPTION1", "DESCRIPTION2", "UNKNOWN"]).nullable();

export type AdGroupAdServiceDescriptionPinnedField = z.infer<typeof adGroupAdServiceDescriptionPinnedField>;
