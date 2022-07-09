import { db } from '..';
import { DataTypes, Model } from 'sequelize';
import { DoctorModel } from './DoctorModel';

export type specialtyType = {
  id?: number;
  name: string;
};

export const SpecialtyModel = class Specialty extends Model<specialtyType> {
  static associate() {
    SpecialtyModel.hasMany(DoctorModel);
  }
};

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
