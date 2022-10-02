import express from "express";
import usuariosRoutes from "./Routes/usuarios.routes.js";
import indexRoutes from "./Routes/index.routes.js";
import { PORT } from './config.js'
const app = express();

app.use(indexRoutes);
app.use(usuariosRoutes);

// app.get('/hola', async(req, res)=>{
//     const [usuarios] = await db.query('SELECT * FROM users')
//     res.json(usuarios.username)
// })

// app.get('/usuario', (req, res)=>res.send('Obteniendo usuarios'))

// app.post('/usuario', (req, res)=>res.send('Creando usuarios'))

// app.put('/usuario', (req, res)=>res.send('Actualizando usuarios'))

// app.delete('/usuario', (req, res)=>res.send('Eliminando usuarios'))

app.listen(PORT | 3000);
console.log('server up port 3000');