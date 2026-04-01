import type { Request, Response } from 'express';
import User from '../models/User.js';

// Register or Login user
export const authenticateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, phone, patientId, role } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !patientId || !role) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Check if user exists by email or patientId
        let user = await User.findOne({
            $or: [{ email }, { patientId }]
        });

        if (user) {
            // User exists - update last login
            user.lastLogin = new Date();
            await user.save();

            return res.status(200).json({
                success: true,
                message: 'Login successful',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    patientId: user.patientId,
                    role: user.role,
                    lastLogin: user.lastLogin
                }
            });
        } else {
            // New user - create account
            user = new User({
                name,
                email,
                phone,
                patientId,
                role,
                createdAt: new Date(),
                lastLogin: new Date()
            });

            await user.save();

            return res.status(201).json({
                success: true,
                message: 'Registration successful',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    patientId: user.patientId,
                    role: user.role,
                    createdAt: user.createdAt,
                    lastLogin: user.lastLogin
                }
            });
        }
    } catch (error: any) {
        console.error('Authentication error:', error);
        
        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Email or Patient ID already exists'
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Server error during authentication',
            error: error.message
        });
    }
};

// Get all users (for admin)
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (error: any) {
        console.error('Get users error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching users',
            error: error.message
        });
    }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            user
        });
    } catch (error: any) {
        console.error('Get user error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching user',
            error: error.message
        });
    }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { ...updates, lastLogin: new Date() },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user
        });
    } catch (error: any) {
        console.error('Update user error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error: any) {
        console.error('Delete user error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        });
    }
};
