import { z } from 'zod';

export const AccountManagementServiceEnterpriseTypePosition = z.enum(["FRONT", "BACK", "UNKNOWN"]).nullable();

export type AccountManagementServiceEnterpriseTypePosition = z.infer<typeof AccountManagementServiceEnterpriseTypePosition>;
