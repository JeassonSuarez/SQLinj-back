import pgPromise from 'pg-promise';
const pgp = pgPromise({});
export const db = pgp('postgres://postgres:admin@localhost:5432/usuarios');

