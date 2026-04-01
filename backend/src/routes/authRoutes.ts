import express from 'express';
import {
    authenticateUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/authController';

const router = express.Router();

// Authentication route (register/login)
router.post('/authenticate', authenticateUser);

// Get all users
router.get('/users', getAllUsers);

// Get user by ID
router.get('/users/:id', getUserById);

// Update user
router.put('/users/:id', updateUser);

// Delete user
router.delete('/users/:id', deleteUser);

export default router;
