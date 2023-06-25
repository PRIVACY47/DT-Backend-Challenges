const express = require('express')
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())



app.listen(8000,()=> console.log("server started on port 8000"))




const Router = require('./Routes')
app.use('/api/v3/app',Router)


// task 2 docs
const swaggerUi = require('swagger-ui-express')
const YAML = require("yamljs")
const swaggerdocs =  YAML.load("./task2.yml")
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerdocs));