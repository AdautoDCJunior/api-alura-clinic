import { Request, Response } from 'express';
import { DoctorModel } from '../database/models/DoctorModel';

export class DoctorController {
  static async getDoctor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const doctor = await DoctorModel.findOne({ where: { id } });

      if (!doctor) {
        throw new Error('Não foi encontrado correspondência para o ID');
      }

      return res.status(200).json(doctor);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async getDoctors(_: Request, res: Response) {
    try {
      const doctors = await DoctorModel.findAll();
      return res.status(200).json(doctors);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async addDoctor(req: Request, res: Response) {
    try {
      const { specialty_id, name, crm } = req.body;
      const doctorAdded = await DoctorModel.create({ specialty_id, name, crm });
      return res.status(201).json(doctorAdded);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async updateDoctor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { specialty_id, name, crm } = req.body;
      const updated = await DoctorModel.update(
        { specialty_id, name, crm },
        { where: { id } }
      );

      if (!updated[0]) {
        throw new Error('Não foi encontrado correspondência para o ID');
      }

      return res.status(204).json();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async deleteDoctor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await DoctorModel.destroy({ where: { id } });

      if (!deleted) {
        throw new Error('Não foi encontrado correspondência para o ID');
      }

      return res.status(204).json();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }
}
