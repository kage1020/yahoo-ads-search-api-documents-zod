import { z } from 'zod';

import { SsaReportDefinitionServiceValue } from './SsaReportDefinitionServiceValue';

export const SsaReportDefinitionServiceReturnValue = z.object({
  values: z.array(SsaReportDefinitionServiceValue).nullable()
}).nullable();

export type SsaReportDefinitionServiceReturnValue = z.infer<typeof SsaReportDefinitionServiceReturnValue>;
