"use strict";
class Seat {
    constructor(identifier, isAvailable) {
        this.identifier = identifier;
        this.isAvailable = isAvailable;
    }
}
class Theater {
    constructor(rowCount, columnCount) {
        this.seats = Array.from({ length: rowCount }, (_, rowIndex) => Array.from({ length: columnCount }, (_, colIndex) => new Seat(`${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`, true)));
    }
    displaySeats() {
        const columnHeaders = Array.from({ length: this.seats[0].length }, (_, colIndex) => colIndex + 1).join("  ");
        console.log("Seat Availability:");
        console.log("    " + columnHeaders);
        this.seats.forEach((row, rowIndex) => {
            const rowDisplay = row.map(seat => seat.isAvailable ? "-" : "B").join("  ");
            console.log(`${String.fromCharCode(65 + rowIndex)} | ${rowDisplay}`);
        });
        console.log("----------------");
    }
    selectSeat(seatIdentifier) {
        const seat = this.findSeat(seatIdentifier);
        if (!seat)
            return "Seat not found.";
        if (!seat.isAvailable)
            return "Seat is already booked.";
        seat.isAvailable = false;
        return `Seat ${seat.identifier} booked successfully! \n --------------------`;
    }
    cancelSeat(seatIdentifier) {
        const seat = this.findSeat(seatIdentifier);
        if (!seat)
            return "Seat not found.";
        if (seat.isAvailable)
            return "Seat is not booked.";
        seat.isAvailable = true;
        return `Seat ${seat.identifier} booking cancelled successfully! \n --------------`;
    }
    findSeat(identifier) {
        for (const row of this.seats) {
            const seat = row.find(s => s.identifier === identifier);
            if (seat)
                return seat;
        }
        return undefined;
    }
}
const theater = new Theater(3, 5);
theater.displaySeats();
console.log(theater.selectSeat("A5"));
theater.displaySeats();
console.log(theater.selectSeat("A5"));
theater.displaySeats();
theater.cancelSeat("A5");
theater.displaySeats();
