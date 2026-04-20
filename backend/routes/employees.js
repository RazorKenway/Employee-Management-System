import express from 'express';
import { getAllEmployees, createEmployee, deleteEmployee } from '../controllers/employeeController.js';
import { validateEmployee } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getAllEmployees);
router.post('/', validateEmployee, createEmployee);
router.delete('/:id', deleteEmployee);

export default router;
