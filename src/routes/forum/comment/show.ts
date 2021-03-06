import express, { Request, Response } from 'express';
import {
    requireAuth,
    NotFoundError,
    NotAuthorizedError
} from '@sgtickets/common';
import { Comment } from '../../../models/forum/comment';

const router = express.Router();

router.get('/comment/:comment_id',
    // requireAuth,
    async (req: Request, res: Response) => {

        const { comment_id } = req.params;
        const comment = await Comment.findOne({ where: { comment_id: comment_id } });

        if (!comment) {
            throw new NotFoundError();
        }

        // if (response.organizer_id !== req.currentUser!.id) {
        //   throw new NotAuthorizedError();
        // }

        res.send(comment);
    });

export { router as commentShowRouter };
