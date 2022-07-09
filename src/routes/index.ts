import { Express } from 'express';
import { DoctorRoutes } from './DoctorRoutes';
import { SpecialtyRoutes } from './SpecialtyRoutes';

export const routes = (app: Express) => {
  app.use('/api/specialty', SpecialtyRoutes);
  app.use('/api/doctor', DoctorRoutes);
};
