import { Router } from 'express';
import { ping } from '../controllers/index.controlles.js';

const router = Router();

// Conectando base de datos
router.get('/ping', ping);
   
   export default router