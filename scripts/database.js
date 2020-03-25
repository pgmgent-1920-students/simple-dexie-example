import Dexie from 'dexie';

const db = new Dexie('artereizen');
db.version(1).stores({
    trips: `++id, location, name`
});

export default db;