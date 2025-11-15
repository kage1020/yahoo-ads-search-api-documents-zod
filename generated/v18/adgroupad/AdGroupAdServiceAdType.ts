import { z } from 'zod';

export const AdGroupAdServiceAdType = z.enum(["TEXT_AD2", "APP_AD", "EXTENDED_TEXT_AD", "DYNAMIC_SEARCH_LINKED_AD", "RESPONSIVE_SEARCH_AD", "UNKNOWN"]).nullable();

export type AdGroupAdServiceAdType = z.infer<typeof AdGroupAdServiceAdType>;
