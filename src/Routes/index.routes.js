import { Router } from "express";
import { db } from "../db.js";


const router = Router();

router.get('/sesion', async(req, res)=>{
    const usuarios = await db.query('SELECT * FROM users')
    //console.log(req);
    console.log(usuarios);
    res.send(usuarios)

})

export default router;