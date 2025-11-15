import { z } from 'zod';

import { AssetServiceAssetData } from './AssetServiceAssetData';
import { AssetServiceApprovalStatus } from './AssetServiceApprovalStatus';
import { AssetServiceTrademarkStatus } from './AssetServiceTrademarkStatus';
import { AssetServiceCustomParameters } from './AssetServiceCustomParameters';

export const Asset = z.object({
  accountId: z.number().int().nullable(),
  assetId: z.number().int().nullable(),
  assetTrackId: z.number().int().nullable(),
  assetData: AssetServiceAssetData,
  approvalStatus: AssetServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  invalidedTrademarks: z.array(z.string().nullable()).nullable(),
  trademarkStatus: AssetServiceTrademarkStatus,
  customParameters: AssetServiceCustomParameters,
  reviewCustomParameters: AssetServiceCustomParameters,
  smartphoneFinalUrl: z.string().nullable(),
  reviewSmartphoneFinalUrl: z.string().nullable(),
  finalUrl: z.string().nullable(),
  reviewFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  reviewTrackingUrl: z.string().nullable()
}).nullable();

export type Asset = z.infer<typeof Asset>;
