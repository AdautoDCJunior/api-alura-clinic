import { Sequelize } from 'sequelize';
import { config } from './config';

export const db = new Sequelize(
  config.database as string,
  config.username as string,
  config.password,
  config
);
