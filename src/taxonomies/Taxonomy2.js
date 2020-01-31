const name = 'Taxonomy 2'

const fieldSchema = {
  title: 'Taxonomy 2',
  description: 'tax tax tax',
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      title: 'Title 2'
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle'
    },
    tasks: {
      type: 'array',
      title: 'Tasks',
      items: {
        type: 'object',
        required: [
          'title'
        ],
        properties: {
          title: {
            type: 'string',
            title: 'Title',
            description: 'A sample title'
          },
          details: {
            type: 'string',
            title: 'Task details',
            description: 'Enter the task details'
          },
          done: {
            type: 'boolean',
            title: 'Done?',
            default: false
          },
          subtasks: {
            type: 'array',
            title: 'SubTasks',
            items: {
              type: 'object',
              required: [
                'title'
              ],
              properties: {
                title: {
                  type: 'string',
                  title: 'Title',
                  description: 'A sample title'
                },
                details: {
                  type: 'string',
                  title: 'Task details',
                  description: 'Enter the task details'
                }
              }
            }
          }
        }
      }
    }
  }
}

const validationSchema = {
  title: {
    required: true,
    rules: [
      {
        type: 'regex',
        regex: /^[a-zA-Z0-9_.-]+$/,
        message: 'Invalid title format.'
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
