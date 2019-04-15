exports.addCarSchema = {
  description: 'Create a new car',
  tags: ['cars'],
  summary: 'Creates new car with given values',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' },
      services: { type: 'object' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}

exports.updateCarSchema = {
  description: 'Updates a car',
  tags: ['cars'],
  summary: 'Updates a car with given values',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' },
      services: { type: 'object' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}

exports.getCarsSchema = {
  description: 'Gets all cars',
  tags: ['cars'],
  summary: 'Gets all cars'
}

exports.getSingleCarSchema = {
  description: 'Gets single car',
  tags: ['cars'],
  summary: 'Gets a single car and its details'
}

exports.deleteCarsSchema = {
  description: 'Deletes a car',
  tags: ['cars'],
  summary: 'Deletes a car'
}
