import { z } from 'zod';

export const CreateUserSchema = z.object({
    username: z.string()
        .min(3, 'Username must be at least 3 characters')
        .max(50, 'Username must be less than 50 characters')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    email: z.string()
        .email('Invalid email format')
        .max(255, 'Email must be less than 255 characters'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .max(128, 'Password must be less than 128 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one lowercase letter, one uppercase letter, and one number')
});

export const UpdateUserSchema = z.object({
    username: z.string()
        .min(3, 'Username must be at least 3 characters')
        .max(50, 'Username must be less than 50 characters')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
        .optional(),
    email: z.string()
        .email('Invalid email format')
        .max(255, 'Email must be less than 255 characters')
        .optional(),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .max(128, 'Password must be less than 128 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one lowercase letter, one uppercase letter, and one number')
        .optional()
}).refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update'
});

export const GetUserByEmailOrUsernameSchema = z.object({
    email: z.string().email('Invalid email format').optional(),
    username: z.string().min(1, 'Username cannot be empty').optional()
}).refine(data => data.email || data.username, {
    message: 'Either email or username must be provided'
});

export const GetUserByUsernameSchema = z.object({
    username: z.string()
        .min(1, 'Username is required')
        .max(50, 'Username must be less than 50 characters')
});

export const RefreshTokenSchema = z.object({
    refreshToken: z.string()
        .min(1, 'Refresh token is required')
        .max(500, 'Refresh token must be less than 500 characters')
})
