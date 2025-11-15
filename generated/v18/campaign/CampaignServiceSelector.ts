import { z } from 'zod';

import { campaignServiceUserStatus } from './CampaignServiceUserStatus';
import { campaignServiceCreatedDateRange } from './CampaignServiceCreatedDateRange';
import { campaignServiceUpdatedDateRange } from './CampaignServiceUpdatedDateRange';
import { campaignServiceBudgetAmountRange } from './CampaignServiceBudgetAmountRange';

export const campaignServiceSelector = z.object({
  accountId: z.number().int(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  campaignBudgetIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(campaignServiceUserStatus).nullable(),
  createdDateRange: campaignServiceCreatedDateRange,
  updatedDateRange: campaignServiceUpdatedDateRange,
  budgetAmountRange: campaignServiceBudgetAmountRange
}).nullable();

export type CampaignServiceSelector = z.infer<typeof campaignServiceSelector>;
