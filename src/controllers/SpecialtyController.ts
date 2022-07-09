import { Request, Response } from 'express';
import { SpecialtyModel } from '../database/models/SpecialtyModel';

export class SpecialtyController {
  static async getSpecialty(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const specialty = await SpecialtyModel.findOne({ where: { id } });

      if (!specialty) {
        throw new Error('Não foi encontrado correspondência para o ID');
      }

      return res.status(200).json(specialty);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async getSpecialtys(_: Request, res: Response) {
    try {
      const specialtys = await SpecialtyModel.findAll();
      return res.status(200).json(specialtys);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async addSpecialty(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const specialtyAdded = await SpecialtyModel.create({ name });
      return res.status(201).json(specialtyAdded);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(500).json();
    }
  }

  static async updateSpeciality(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updated = await SpecialtyModel.update({ name }, { where: { id } });

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

  static async deleteSpeciality(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await SpecialtyModel.destroy({ where: { id } });

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
