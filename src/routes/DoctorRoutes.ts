import { Router } from 'express';
import { DoctorController } from '../controllers/DoctorController';

export const DoctorRoutes = Router();

DoctorRoutes.get('/:id', DoctorController.getDoctor);
DoctorRoutes.get('/', DoctorController.getDoctors);
DoctorRoutes.post('/', DoctorController.addDoctor);
DoctorRoutes.put('/:id', DoctorController.updateDoctor);
DoctorRoutes.delete('/:id', DoctorController.deleteDoctor);
