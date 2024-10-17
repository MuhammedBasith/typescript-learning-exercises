"use strict";
class Seat {
    constructor(number, isAvailable) {
        this.number = number;
        this.isAvailable = isAvailable;
    }
}
class Theater {
    constructor(seatCount) {
        this.seats = Array.from({ length: seatCount }, (_, index) => new Seat((index + 1).toString(), true));
    }
    displaySeats() {
        console.log("Seat Availability:");
        this.seats.forEach(seat => {
            const status = seat.isAvailable ? "Available" : "Booked";
            console.log(`Seat ${seat.number}: ${status}`);
        });
        console.log("----------------");
    }
    selectSeat(seatNumber) {
        const seat = this.seats.find(s => s.number === seatNumber);
        if (!seat)
            return "Seat not found.";
        if (!seat.isAvailable)
            return "Seat is already booked.";
        seat.isAvailable = false;
        return `Seat ${seat.number} booked successfully! \n --------------------`;
    }
    cancelSeat(seatNumber) {
        const seat = this.seats.find(s => s.number === seatNumber);
        if (!seat)
            return "Seat not found.";
        if (seat.isAvailable)
            return "Seat is not booked.";
        seat.isAvailable = true;
        return `Seat ${seat.number} booking cancelled successfully! \n --------------`;
    }
}
const theater = new Theater(100);
theater.displaySeats();
console.log(theater.selectSeat("5"));
theater.displaySeats();
console.log(theater.selectSeat("5"));
theater.displaySeats();
theater.cancelSeat('5');
theater.displaySeats();
