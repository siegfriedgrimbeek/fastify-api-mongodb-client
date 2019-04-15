// Import external dependancies
const faker = require('faker')
const getValues = require("lodash").values

// Import internal dependancies
const fastify = require('../server/')
const fakeData = require('./fake-data.js')

// Fake data
const cars = fakeData.cars
const serviceGarages = fakeData.serviceGarages

// Fake data generation functions
const generateUserData = () => {
  let userData = []
  let i = 0

  while (i < 500) {
    const firstName = faker.fake('{{name.firstName}}')
    const lastName = faker.fake('{{name.lastName}}')
    const email = faker.fake(`${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`)

    const user = {
      firstName,
      lastName,
      email
    }

    userData.push(user)
    i++
  }

  return userData
}

const generateCarData = (usersIds) => {
  let carData = []
  let i = 0

  while (i < 10000) {
    const owner_id = faker.random.arrayElement(usersIds)
    const carObject = faker.random.arrayElement(cars)
    const title = faker.random.arrayElement(carObject.models)
    const price = faker.random.number({min:5000, max:30000})
    const age = faker.random.number({min:2, max:10})

    const car = {
      owner_id,
      brand: carObject.name,
      title,
      price,
      age
    }

    carData.push(car)
    i++
  }

  return carData
}

const generateServiceData = (carsIds) => {
  let serviceData = []
  let i = 0

  while (i < 50000) {
    const car_id = faker.random.arrayElement(carsIds)
    const name = faker.random.arrayElement(serviceGarages)
    const date = faker.fake('{{date.past}}')

    const service = {
      car_id,
      name,
      date
    }

    serviceData.push(service)
    i++
  }

  return serviceData
}


fastify.ready().then(async () => {
  // Specify databse collections
  const userCollection = fastify.mongo.db.collection('users')
  const carCollection = fastify.mongo.db.collection('cars')
  const serviceCollection = fastify.mongo.db.collection('services')

  // Insert users and get ID's of inserted users
  const users = await userCollection.insertMany(generateUserData())
  const usersIds = getValues(users.insertedIds)

  // Insert cars and get ID's of inserted cars
  const cars = await carCollection.insertMany(generateCarData(usersIds))
  const carsIds = getValues(cars.insertedIds)

  // Insert services
  const services = await serviceCollection.insertMany(generateServiceData(carsIds))

  console.log(`Data successfully seeded:
    - ${users.insertedCount} users added.
    - ${cars.insertedCount} cars added.
    - ${services.insertedCount} services added.
  `)

  process.exit()
}, (err) => {
  console.log('An error happened', err)
  process.exit()
})
