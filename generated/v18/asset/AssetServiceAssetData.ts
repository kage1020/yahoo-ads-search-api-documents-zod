import { z } from 'zod';

import { assetServiceType } from './AssetServiceType';
import { assetServiceQuickLinkAsset } from './AssetServiceQuickLinkAsset';
import { assetServiceCallAsset } from './AssetServiceCallAsset';
import { assetServiceCalloutAsset } from './AssetServiceCalloutAsset';
import { assetServiceStructuredSnippetAsset } from './AssetServiceStructuredSnippetAsset';
import { assetServiceImageAsset } from './AssetServiceImageAsset';
import { assetServiceFaviconAsset } from './AssetServiceFaviconAsset';

export const assetServiceAssetData = z.object({
  type: assetServiceType,
  quickLinkAsset: assetServiceQuickLinkAsset,
  callAsset: assetServiceCallAsset,
  calloutAsset: assetServiceCalloutAsset,
  structuredSnippetAsset: assetServiceStructuredSnippetAsset,
  imageAsset: assetServiceImageAsset,
  faviconAsset: assetServiceFaviconAsset
}).nullable();

export type AssetServiceAssetData = z.infer<typeof assetServiceAssetData>;
