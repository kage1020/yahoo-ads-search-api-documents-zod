import { z } from 'zod';

import { OfflineConversionServiceSortType } from './OfflineConversionServiceSortType';
import { OfflineConversionServiceSortField } from './OfflineConversionServiceSortField';

export const OfflineConversionServiceSort = z.object({
  sortType: OfflineConversionServiceSortType,
  sortField: OfflineConversionServiceSortField
}).nullable();

export type OfflineConversionServiceSort = z.infer<typeof OfflineConversionServiceSort>;
