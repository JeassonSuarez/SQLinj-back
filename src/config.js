import { config } from 'dotenv';

config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);

export const PORT = process.env.PORT;