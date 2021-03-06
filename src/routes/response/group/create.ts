import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
    requireAuth,
    validateRequest,
    BadRequestError
} from '@sgtickets/common';
import { Group } from '../../../models/response/group';
const router = express.Router();

router.post(
    '/group',
    // requireAuth,
    [
        body('group_name')
            .trim()
            .isLength({ min: 2, max: 20 })
            .withMessage('group name must be between 2 and 20 characters'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {

        const { user_id, response_id, group_name, description } = req.body;

        const existingGroup = await Group.findOne({ where: { group_name: group_name } });

        if (existingGroup && existingGroup.response_id == response_id) {
            throw new BadRequestError('Group name in use');
        }


        const group = await Group.create({ user_id, response_id, group_name, description });

        res.status(201).send(group);
    }
);

export { router as groupCreateRouter };