export const Taxonomy2 = {
  title: 'Taxonomy',
  description: 'tax tax tax',
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      title: 'Title'
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
