import { registerAs } from "@nestjs/config";
import { deflate } from "zlib";

export default registerAs('auth', () => ({
    jwtSecret: process.env.JWT_SECRET || 'chave_secreta-padrao',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || 'Id',
}));