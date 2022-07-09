import { DataTypes, Model } from 'sequelize';
import { db } from '..';
import { SpecialtyModel } from './SpecialtyModel';

export type doctorType = {
  id?: number;
  specialty_id: number;
  name: string;
  crm: number;
};

export const DoctorModel = class Doctor extends Model<doctorType> {
  static associate() {
    DoctorModel.belongsTo(SpecialtyModel, { foreignKey: 'specialty_id' });
  }
};

DoctorModel.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    specialty_id: {
      allowNull: false,
      references: { model: 'specialty', key: 'id' },
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(120),
    },
    crm: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'Doctor',
    tableName: 'doctor',
    timestamps: false,
  }
);
