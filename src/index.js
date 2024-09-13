import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

// con este json valido los datos enviados de la peticion que vienen desde el cliente
app.use(express.json())

// Route base de datos
app.use(indexRoutes)
app.use('/api', employeesRoutes)


// Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found',
  })
})

app.listen(3000)
console.log('Server running on port 3000')
