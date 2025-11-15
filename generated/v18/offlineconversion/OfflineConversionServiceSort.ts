import { z } from 'zod';

import { offlineConversionServiceSortType } from './OfflineConversionServiceSortType';
import { offlineConversionServiceSortField } from './OfflineConversionServiceSortField';

export const offlineConversionServiceSort = z.object({
  sortType: offlineConversionServiceSortType,
  sortField: offlineConversionServiceSortField
}).nullable();

export type OfflineConversionServiceSort = z.infer<typeof offlineConversionServiceSort>;
