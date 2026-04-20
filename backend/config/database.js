import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/employee-management';

export const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected');
    } catch (error) {
        console.error('Database error:', error.message);
        process.exit(1);
    }
};

export default mongoose.connection;

