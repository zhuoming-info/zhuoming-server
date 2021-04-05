import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from '@sgtickets/common';
import { Like } from '../../../models/forum/like';

const router = express.Router();

router.delete(
  '/like/:like_id',
  // requireAuth,
  async (req: Request, res: Response) => {
    const { like_id } = req.params;

    const like = await Like.findOne({ where: { like_id: like_id } });

    if (!like) {
      throw new NotFoundError();
    }
    // if (response.id !== req.currentUser!.id) {
    //   throw new NotAuthorizedError();
    // }

    await Like.destroy({ where: { like_id: like_id } });

    res.status(204).send(like);
  }
);

export { router as likeDeleteRouter };
