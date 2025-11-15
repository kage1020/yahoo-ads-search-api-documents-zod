import { z } from 'zod';

import { error } from '../../common/Error';
import { customizerAttribute } from './CustomizerAttribute';

export const customizerAttributeServiceValue = z.object({
  errors: z.array(error).nullable(),
  customizerAttribute: customizerAttribute,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CustomizerAttributeServiceValue = z.infer<typeof customizerAttributeServiceValue>;
