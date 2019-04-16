exports.getSingleServiceSchema = {
  description: 'Gets single service',
  tags: ['services'],
  summary: 'Gets a single service and its details',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'MongoDB Object ID of the service to get.'
      }
    }
  }
}

exports.getCarsServicesSchema = {
  description: 'Gets all services performed on a car',
  tags: ['services'],
  summary: 'Gets all services performed on a car',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'MongoDB Object ID of the car to get its services.'
      }
    }
  }
}
