exports.getUsersSchema = {
  description: 'Gets all users',
  tags: ['users'],
  summary: 'Gets all users'
}

exports.getSingleUserSchema = {
  description: 'Gets single user',
  tags: ['users'],
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'MongoDB Object ID of the user to get.'
      }
    }
  },
  summary: 'Gets a single user and their details'
}

exports.getUsersCarsSchema = {
  description: 'Gets all cars owned by a user',
  tags: ['users'],
  summary: 'Gets all cars owned by a user',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'MongoDB Object ID of the user to get their cars.'
      }
    }
  }
}
