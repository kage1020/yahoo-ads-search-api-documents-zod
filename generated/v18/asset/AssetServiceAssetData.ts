import { z } from 'zod';

import { AssetServiceType } from './AssetServiceType';
import { AssetServiceQuickLinkAsset } from './AssetServiceQuickLinkAsset';
import { AssetServiceCallAsset } from './AssetServiceCallAsset';
import { AssetServiceCalloutAsset } from './AssetServiceCalloutAsset';
import { AssetServiceStructuredSnippetAsset } from './AssetServiceStructuredSnippetAsset';
import { AssetServiceImageAsset } from './AssetServiceImageAsset';
import { AssetServiceFaviconAsset } from './AssetServiceFaviconAsset';

export const AssetServiceAssetData = z.object({
  type: AssetServiceType,
  quickLinkAsset: AssetServiceQuickLinkAsset,
  callAsset: AssetServiceCallAsset,
  calloutAsset: AssetServiceCalloutAsset,
  structuredSnippetAsset: AssetServiceStructuredSnippetAsset,
  imageAsset: AssetServiceImageAsset,
  faviconAsset: AssetServiceFaviconAsset
}).nullable();

export type AssetServiceAssetData = z.infer<typeof AssetServiceAssetData>;
