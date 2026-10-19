import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './projectType';
import { memberType } from './memberType';
import { faqType } from './faqType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, memberType, faqType],
};
