const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles)