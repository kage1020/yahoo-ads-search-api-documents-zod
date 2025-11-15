import { z } from 'zod';

export const Label = z.object({
  accountId: z.number().int().nullable(),
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable(),
  labeledAdGroup: z.number().int().nullable(),
  labeledAdGroupAd: z.number().int().nullable(),
  labeledAdGroupCriterion: z.number().int().nullable(),
  labeledCampaign: z.number().int().nullable()
}).nullable();

export type Label = z.infer<typeof Label>;
