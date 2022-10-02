import pgPromise from 'pg-promise';
import { DB_PORT, DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } from './config.js'
const pgp = pgPromise({});
export const db = pgp(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);

