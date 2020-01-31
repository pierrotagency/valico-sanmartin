const name = 'Taxonomy 1'

const fieldSchema = {
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

const validationSchema = {
  title: {
    required: true,
    rules: [
      {
        onSubmit: true,
        type: 'backend',
        object: {
          name: 'required|min:6'
        },
        messages: {
          'name.min': 'Shorty nammme'
        }
      }
    ]
  },
  subtitle: {
    required: true
  }
}

export default {
  name: name,
  fieldSchema: fieldSchema,
  validationSchema: validationSchema
}
