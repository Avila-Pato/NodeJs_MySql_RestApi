import { Router } from 'express';
import { createemployess, deleteemployess, getEmployess, updateemployess, getEmploye } from '../controllers/emplotees.controlles.js';


const router = Router();

router.get('/employess', getEmployess);

// Obteneindo el employee por parametro id 
router.get('/employess/:id', getEmploye);



  router.post('/employess', createemployess)

  // con path deja actualziar el valor parcialmente
  router.patch('/employess/:id', updateemployess)

  router.delete('/employess/:id', deleteemployess)
  
  export default router