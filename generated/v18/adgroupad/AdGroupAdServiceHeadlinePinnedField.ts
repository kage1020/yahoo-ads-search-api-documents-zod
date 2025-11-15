import { z } from 'zod';

export const AdGroupAdServiceHeadlinePinnedField = z.enum(["UNSPECIFIED", "HEADLINE1", "HEADLINE2", "HEADLINE3", "UNKNOWN"]).nullable();

export type AdGroupAdServiceHeadlinePinnedField = z.infer<typeof AdGroupAdServiceHeadlinePinnedField>;
