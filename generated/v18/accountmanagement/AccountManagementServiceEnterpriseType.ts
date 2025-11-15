import { z } from 'zod';

export const AccountManagementServiceEnterpriseType = z.enum(["KABUSHIKI", "YUGEN", "GOSI", "ZAIDAN", "SYADAN", "SYUKYO", "GAKKO", "KOJIN", "OTHER", "GOMEI", "HIEIRI", "GODO", "KYODO", "UNKNOWN"]).nullable();

export type AccountManagementServiceEnterpriseType = z.infer<typeof AccountManagementServiceEnterpriseType>;
