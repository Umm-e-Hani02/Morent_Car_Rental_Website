import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import { dashboard } from './dashboard'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars, dashboard, order],
}
