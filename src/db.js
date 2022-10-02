import pgPromise from 'pg-promise';
const pgp = pgPromise({});
export const db = pgp('postgresql://postgres:GxyrHrO7HfJDTG8iw0yV@containers-us-west-73.railway.app:6073/railway');

