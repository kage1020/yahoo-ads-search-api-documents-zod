import { z } from 'zod';

import { Error } from './Error';
import { CustomizerAttribute } from './CustomizerAttribute';

export const CustomizerAttributeServiceValue = z.object({
  errors: z.array(Error).nullable(),
  customizerAttribute: CustomizerAttribute,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CustomizerAttributeServiceValue = z.infer<typeof CustomizerAttributeServiceValue>;
