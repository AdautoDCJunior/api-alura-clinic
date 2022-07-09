import { Sequelize } from 'sequelize/types';
import { config } from './config';

export const db = new Sequelize(
  config.database as string,
  config.username as string,
  config.password,
  config
);
