import mongoose from 'mongoose';

async function conectaNaDatabase(params) {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDatabase;




