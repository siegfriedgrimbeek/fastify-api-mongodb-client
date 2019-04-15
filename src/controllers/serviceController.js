// External Dependancies
const boom = require('boom')
const ObjectId = require("bson").ObjectId

// Get single service ID
exports.getSingleService = async (req, servicesCollection) => {
  try {
    const id = req.params.id
    const user = await servicesCollection.findOne({_id: new ObjectId(id)})
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car's services
exports.getCarsServices = async (req, servicesCollection) => {
  try {
    const id = req.params.id
    const services = await servicesCollection.find({"car_id": new ObjectId(id)})
    return services.toArray()
  } catch (err) {
    throw boom.boomify(err)
  }
}
