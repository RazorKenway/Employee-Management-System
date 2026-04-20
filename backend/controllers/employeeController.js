import Employee from '../models/Employee.js';
import { validationResult } from 'express-validator';

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            data: employees,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get employees',
        });
    }
};

export const createEmployee = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
            });
        }

        const { name, email, role } = req.body;

        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists',
            });
        }

        const employee = new Employee({
            name,
            email,
            role,
        });

        await employee.save();

        res.status(201).json({
            success: true,
            data: employee,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create employee',
        });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByIdAndDelete(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Employee deleted',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete employee',
        });
    }
};
