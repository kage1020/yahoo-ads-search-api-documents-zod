import { z } from 'zod';

export const accountManagementServiceEnterpriseTypePosition = z.enum(["FRONT", "BACK", "UNKNOWN"]).nullable();

export type AccountManagementServiceEnterpriseTypePosition = z.infer<typeof accountManagementServiceEnterpriseTypePosition>;
