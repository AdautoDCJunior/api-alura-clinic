import { Options, Dialect } from 'sequelize';

export const config: Options = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT as Dialect,
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
};
