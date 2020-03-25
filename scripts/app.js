import db from './database';

const app = {

    init() {
        // CREATE
        // this.newTrips();  // uncomment line to add trips

        // READ
        // this.getTrips(); // uncomment line to get all trips

        // UPDATE
        // this.changeTrip(); // uncomment line to update a trip

        // DELETE
        // this.deleteTrip(); // uncomment line to delete trips
    },

    // CREATE
    async newTrips() {
        let firstId, secondId;
        // create trips
        firstId = await this.create('Boswandeling in de Vlaamse Ardennen', 'Brakel');
        secondId = await this.create('Skiën in Sölden', 'Alpen, Oostenrijk');
        // log id's
        console.log(`Nieuwe record met id: ${firstId}`);
        console.log(`Nieuwe record met id: ${secondId}`);

    },
    async create(someTitle, someLocation) {
        const trip = await db.trips.add({
            title: someTitle,
            location: someLocation
        });
        return trip;
    },

    // READ
    async getTrips() {
        const trips = await this.read();
        console.log('Alle reizen:')
        console.log(trips);
    },
    async read() {
        return await db.trips.toArray();
    },

    // UPDATE
    async changeTrip() {
        let id = await this.update(2,'Zonnebaden aan het meer', 'Aruba');
        console.log(`Trip gewijzigd e-met id: ${firstId}`);
    },
    async update(id, newTitle, newLocation) {

        const trip = await db.trips.update(id, {
            title: newTitle,
            location: newLocation
        });
        
        return trip;
    },

    // DELETE
    async deleteTrip() {
        const id = 1;
        const deleted = this.delete(id);
        if(deleted) console.log('Reis verwijderd')
    },
    async delete(id) {
        const deleted = await db.trips.where('id').equals(id).delete();       
        return deleted;
    }
};

app.init();