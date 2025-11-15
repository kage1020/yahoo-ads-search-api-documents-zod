import { z } from 'zod';

import { adGroupWebpageServiceBid } from './AdGroupWebpageServiceBid';
import { adGroupWebpageServiceExcludedType } from './AdGroupWebpageServiceExcludedType';
import { adGroupWebpageServiceUserStatus } from './AdGroupWebpageServiceUserStatus';
import { adGroupWebpageServiceWebpage } from './AdGroupWebpageServiceWebpage';

export const adGroupWebpage = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  bid: adGroupWebpageServiceBid,
  campaignId: z.number().int().nullable(),
  campaignTrackId: z.number().int().nullable(),
  excludedType: adGroupWebpageServiceExcludedType,
  userStatus: adGroupWebpageServiceUserStatus,
  webpage: adGroupWebpageServiceWebpage
}).nullable();

export type AdGroupWebpage = z.infer<typeof adGroupWebpage>;
