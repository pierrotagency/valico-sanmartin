import React from 'react'
import PropTypes from 'prop-types'

export const Bar = props => (
  <div className='bar'>
    <h2>BAR</h2>
    {props.fields.title && <h3>{props.fields.title}</h3>}
    {props.fields.subtitle && <h4>{props.fields.subtitle}</h4>}
    <ul>
      {props.fields.tasks.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  </div>
)

Bar.propTypes = {
  fields: PropTypes.object
}

export const defaultsBar = {
  title: 'Default Title Bar',
  subtitle: 'Default Subtitle Bar',
  'tasks': [
    {
      'title': 'My first task',
      'details': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'done': true
    },
    {
      'title': 'My second task',
      'details': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      'done': false
    }
  ]
}

export const schemaBar = {
  title: 'Bar Module Form',
  description: 'A simple form example.',
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      default: 'Rodrigo'
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle'
    },
    'tasks': {
      'type': 'array',
      'title': 'Tasks',
      'items': {
        'type': 'object',
        'required': [
          'title'
        ],
        'properties': {
          'title': {
            'type': 'string',
            'title': 'Title'
          },
          'details': {
            'type': 'string',
            'title': 'Task details',
            'description': 'Enter the task details'
          },
          'done': {
            'type': 'boolean',
            'title': ' Done?',
            'default': false
          }
        }
      }
    }
  }
}
