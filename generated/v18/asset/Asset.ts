import { z } from 'zod';

import { assetServiceAssetData } from './AssetServiceAssetData';
import { assetServiceApprovalStatus } from './AssetServiceApprovalStatus';
import { assetServiceTrademarkStatus } from './AssetServiceTrademarkStatus';
import { assetServiceCustomParameters } from './AssetServiceCustomParameters';

export const asset = z.object({
  accountId: z.number().int().nullable(),
  assetId: z.number().int().nullable(),
  assetTrackId: z.number().int().nullable(),
  assetData: assetServiceAssetData,
  approvalStatus: assetServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  invalidedTrademarks: z.array(z.string().nullable()).nullable(),
  trademarkStatus: assetServiceTrademarkStatus,
  customParameters: assetServiceCustomParameters,
  reviewCustomParameters: assetServiceCustomParameters,
  smartphoneFinalUrl: z.string().nullable(),
  reviewSmartphoneFinalUrl: z.string().nullable(),
  finalUrl: z.string().nullable(),
  reviewFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  reviewTrackingUrl: z.string().nullable()
}).nullable();

export type Asset = z.infer<typeof asset>;
