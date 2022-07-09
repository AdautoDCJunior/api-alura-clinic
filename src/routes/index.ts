import { Express } from 'express';
import { SpecialtyRoutes } from './SpecialtyRoutes';

export const routes = (app: Express) => {
  app.use('/api/specialty', SpecialtyRoutes);
};
