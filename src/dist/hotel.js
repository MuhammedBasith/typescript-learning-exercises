"use strict";
class Hotel {
    constructor() {
        this.rooms = [
            { id: 1, price: 100, available: true },
            { id: 2, price: 150, available: true },
            { id: 3, price: 200, available: false },
        ];
    }
    checkAvailability(roomId) {
        const room = this.rooms.find(r => r.id === roomId);
        return room ? room.available : false;
    }
    bookRoom(roomId, nights) {
        const room = this.rooms.find(r => r.id === roomId);
        if (room && room.available) {
            room.available = false;
            return room.price * nights;
        }
        return null;
    }
    displayRooms() {
        this.rooms.forEach(room => {
            console.log(`Room ID: ${room.id}, Price: $${room.price}, ${room.available ? "Available" : "Booked"}`);
        });
    }
}
// ---
const hotel = new Hotel();
hotel.displayRooms();
const roomToBook = 10;
const nights = 3;
if (hotel.checkAvailability(roomToBook)) {
    const totalCost = hotel.bookRoom(roomToBook, nights);
    if (totalCost !== null) {
        console.log(`Room ${roomToBook} booked for ${nights} nights. Total cost: ₹${totalCost}`);
    }
}
else {
    console.log(`Room ${roomToBook} is not available.`);
}
hotel.displayRooms();
