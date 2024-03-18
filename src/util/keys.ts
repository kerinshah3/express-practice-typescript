import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const keys = {
    MONGODB_URL: process.env.MONGOURL || '',
    // Add other environment variables here
};
