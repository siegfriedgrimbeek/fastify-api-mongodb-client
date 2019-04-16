exports.addCarSchema = {
  description: 'Create a new car',
  tags: ['cars'],
  summary: 'Creates new car with given values',
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      brand: {
        type: 'string'
      },
      price: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      owner_id: {
        type: 'string'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        n: {
          type: 'number'
        },
        ok: {
          type: 'number'
        }
      }
    }
  }
}

exports.updateCarSchema = {
  description: 'Updates a car',
  tags: ['cars'],
  summary: 'Updates a car with given values',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the car to update.'
      }
    }
  },
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      brand: {
        type: 'string'
      },
      price: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      owner_id: {
        type: 'string'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        n: {
          type: 'number'
        },
        ok: {
          type: 'number'
        }
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
  summary: 'Gets a single car and its details',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the car to get.'
      }
    }
  }
}

exports.deleteCarsSchema = {
  description: 'Deletes a car',
  tags: ['cars'],
  summary: 'Deletes a car',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the car to delete.'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        n: {
          type: 'number',
        },
        ok: {
          type: 'number'
        }
      }
    }
  }
}
