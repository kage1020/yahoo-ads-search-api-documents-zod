import { z } from 'zod';

export const campaignTargetServiceRadiusTarget = z.object({
  latitudeInMicroDegrees: z.number().int().nullable(),
  longitudeInMicroDegrees: z.number().int().nullable(),
  radius: z.number().int().nullable(),
  description: z.string().nullable()
}).nullable();

export type CampaignTargetServiceRadiusTarget = z.infer<typeof campaignTargetServiceRadiusTarget>;
