import { body } from 'express-validator';

export const validateEmployee = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().notEmpty().isEmail().withMessage('Invalid email'),
    body('role').trim().notEmpty().withMessage('Role is required'),
];

export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Server error',
    });
};

