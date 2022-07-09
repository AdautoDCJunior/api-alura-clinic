import { Router } from 'express';
import { SpecialtyController } from '../controllers/SpecialtyController';

export const SpecialtyRoutes = Router();

SpecialtyRoutes.get('/:id', SpecialtyController.getSpecialty);
SpecialtyRoutes.get('/', SpecialtyController.getSpecialtys);
SpecialtyRoutes.post('/', SpecialtyController.addSpecialty);
SpecialtyRoutes.put('/:id', SpecialtyController.updateSpeciality);
SpecialtyRoutes.delete('/:id', SpecialtyController.deleteSpeciality);
