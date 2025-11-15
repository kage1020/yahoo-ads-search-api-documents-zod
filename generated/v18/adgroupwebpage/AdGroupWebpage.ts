import { z } from 'zod';

import { AdGroupWebpageServiceBid } from './AdGroupWebpageServiceBid';
import { AdGroupWebpageServiceExcludedType } from './AdGroupWebpageServiceExcludedType';
import { AdGroupWebpageServiceUserStatus } from './AdGroupWebpageServiceUserStatus';
import { AdGroupWebpageServiceWebpage } from './AdGroupWebpageServiceWebpage';

export const AdGroupWebpage = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  bid: AdGroupWebpageServiceBid,
  campaignId: z.number().int().nullable(),
  campaignTrackId: z.number().int().nullable(),
  excludedType: AdGroupWebpageServiceExcludedType,
  userStatus: AdGroupWebpageServiceUserStatus,
  webpage: AdGroupWebpageServiceWebpage
}).nullable();

export type AdGroupWebpage = z.infer<typeof AdGroupWebpage>;
