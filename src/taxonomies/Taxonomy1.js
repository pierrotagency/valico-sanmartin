export const Taxonomy1 = {
  title: 'Taxonomy 1',
  description: 'tax tax tax',
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      title: 'Title 1'
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle'
    },
    minViewCount: {
      type: 'integer',
      title: 'Min View Count'
    }
  }
}
