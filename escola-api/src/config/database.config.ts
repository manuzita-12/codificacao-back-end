import { registerAs } from "@nestjs/config";

export default registerAs('database', () =>({
    uri: process.env.DATABASE_URI || 'mongo://localhost:27017/escola_dbn',
    maxPoolSize: parseInt(process.env.MAX_POOL_SIZE || '10', 10),
}));