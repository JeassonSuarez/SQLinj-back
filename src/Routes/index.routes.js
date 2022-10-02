import { Router } from "express";
import { db } from "../db.js";


const router = Router();

router.get('/hola', async(req, res)=>{
    const [usuarios] = await db.query('SELECT * FROM users')
    res.json(usuarios.username)
})

export default router;