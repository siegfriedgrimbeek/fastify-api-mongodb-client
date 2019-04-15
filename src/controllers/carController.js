// External Dependancies
const boom = require('boom')
const ObjectId = require("bson").ObjectId

// Get all cars
exports.getCars = async (carsCollection) => {
  try {
    const cars = await carsCollection.find()
    return cars.toArray()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleCar = async (req, carsCollection) => {
  try {
    const id = req.params.id
    const car = await carsCollection.findOne({_id: new ObjectId(id)})
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addCar = async (req, carsCollection) => {
  try {
    const car = req.body
    return await carsCollection.insertOne(car)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateCar = async (req, carsCollection) => {
  try {
    const id = req.params.id
    const updateData  = req.body
    const updateResponse = await carsCollection.updateOne(
      { _id: ObjectId(id) },
      { $set: updateData  }
    )
    return updateResponse
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteCar = async (req, carsCollection) => {
  try {
    const id = req.params.id
    const deleteResponse = await carsCollection.deleteOne({_id: ObjectId(id)})
    return deleteResponse
  } catch (err) {
    throw boom.boomify(err)
  }
}
