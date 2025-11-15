import { z } from 'zod';

import { ssaReportDefinitionServiceValue } from './SsaReportDefinitionServiceValue';

export const ssaReportDefinitionServiceReturnValue = z.object({
  values: z.array(ssaReportDefinitionServiceValue).nullable()
}).nullable();

export type SsaReportDefinitionServiceReturnValue = z.infer<typeof ssaReportDefinitionServiceReturnValue>;
