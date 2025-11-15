import { z } from 'zod';

export const ReportDefinitionServiceReportType = z.enum(["ACCOUNT", "CAMPAIGN", "ADGROUP", "AD", "KEYWORDS", "SEARCH_QUERY", "GEO", "GEO_TARGET", "SCHEDULE_TARGET", "BID_STRATEGY", "CAMPAIGN_TARGET_LIST", "ADGROUP_TARGET_LIST", "LANDING_PAGE_URL", "KEYWORDLESS_QUERY", "WEBPAGE_CRITERION", "BID_MODIFIER", "CAMPAIGN_ASSET", "ADGROUP_ASSET", "RESPONSIVE_ADS_FOR_SEARCH_ASSET", "ASSET_COMBINATIONS", "CAMPAIGN_BUDGET", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportType = z.infer<typeof ReportDefinitionServiceReportType>;
