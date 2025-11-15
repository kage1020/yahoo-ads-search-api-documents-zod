import { z } from 'zod';

export const AdGroupAdServiceDescriptionPinnedField = z.enum(["UNSPECIFIED", "DESCRIPTION1", "DESCRIPTION2", "UNKNOWN"]).nullable();

export type AdGroupAdServiceDescriptionPinnedField = z.infer<typeof AdGroupAdServiceDescriptionPinnedField>;
