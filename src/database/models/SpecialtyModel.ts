import { db } from '..';
import { DataTypes, Model } from 'sequelize';

export type specialtyType = {
  id?: number;
  name: string;
};

export const SpecialtyModel = class Specialty extends Model<specialtyType> {};

SpecialtyModel.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Specialty',
    tableName: 'specialty',
    timestamps: false,
  }
);
