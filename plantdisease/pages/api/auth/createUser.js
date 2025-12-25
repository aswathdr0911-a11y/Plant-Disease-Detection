import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../utils/token';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { username, password, email } = req.body;

  console.log('Signup request username:', username);
  console.log('Signup request email:', email);
  console.log('Signup request password:', password);

  try {
    // Validate input
    if (!email || !password || !username) {
      return res.status(400).json({
        message: 'Please provide all required fields',
      });
    }

    // Check existing email
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({
        message: 'This email is already registered',
      });
    }

    // Check existing username
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return res.status(400).json({
        message: 'This username is already taken',
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

    // Generate JWT
    const token = generateToken({
      userId: user.id,
      permission: 'ADMIN',
    });

    return res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);

    // Prisma unique constraint error
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0];
      const fieldMessages = {
        phoneNumber: 'This phone number is already registered',
        email: 'This email is already registered',
        username: 'This username is already taken',
      };

      if (field && fieldMessages[field]) {
        return res.status(400).json({
          message: fieldMessages[field],
        });
      }
    }

    return res.status(500).json({
      message: 'Registration failed. Please try again.',
      details:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined,
    });
  }
}