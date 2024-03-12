class Vechical {
  constructor(type, regNumber) {
    this.type = type;
    this.regNumber = regNumber;
  }
}
//inherit this property;

class Car extends Vechical {
  constructor(type, regNumber) {
    super(type, regNumber);
  }
}

class Truck extends Vechical {
  constructor(type, regNumber) {
    super(type, regNumber);
  }
}

class Bike extends Vechical {
  constructor(type, regNumber) {
    super(type, regNumber);
  }
}

//slot->floor->parkingSlot
class Slot {
  #slotBooked;
  constructor(slotNumber, vechicalType) {
    this.slotNumber = slotNumber;
    this.vechicalType = vechicalType;
    this.#slotBooked = false; //we need to change based on booking
  }
  //setter and getter-> middleman for security
  get _slotBooked() {
    return this.#slotBooked;
  }
  set _slotBooked(bool) {
    this.#slotBooked = bool;
  }
}
let s1 = new Slot(1, "bike");

s1._slotBooked = true; // its like a function but we need to pass value in this like this
// console.log("s1", s1);
// console.log(s1._slotBooked);
//to protect from security breach we use #---> because we can directly access this with s1.slotBooked and it give value i need to make them private

//!Parking Floor;
//each parking floor has three slot we need to create three slot;

class ParkingFloor {
  constructor(floorNumber, maxSlots = 3) {
    this.floorNumber = floorNumber;
    this.parkingSpots = [];
    for (let i = 0; i < maxSlots; i++) {
      if (i === 0) {
        this.parkingSpots.push(new Slot(i, "Truck"));
      } else if (i === 1) {
        this.parkingSpots.push(new Slot(i, "Bike"));
      } else {
        this.parkingSpots.push(new Slot(i, "Car"));
      }
    }
  }
}

class ParkingLot {
  constructor(numberOfFloors) {
    this.numberOfFloors = numberOfFloors;
    this.floors = [];
    for (let i = 0; i < numberOfFloors; i++) {
      this.floors.push(new ParkingFloor(i, numberOfFloors));
    }
  }

  findSlot(type) {
    for (let i = 0; i < this.numberOfFloors; i++) {
      for (let slot of this.floors[i].parkingSpots) {
        if (slot.vechicalType === type && !slot._slotBooked) {
          return { floorNumber: i, slot: slot };
        }
      }
    }
  }
  parkVehicle(vechical) {
    let slot = this.findSlot(vechical.type);
    console.log("slot", slot);
    slot.slot._slotBooked = true;
  }
  IssuedTicket(vechical) {
    let price;
    if (vechical.type === "Car") {
      price = 30;
    } else if (vechical.type === "Bike") {
      price = 50;
    } else {
      price = 100;
    }
    let slot = this.findSlot(vechical.type);
    if (slot.slot._slotBooked) {
      alert("Booked", price);
    }
  }
}

// let parkingFloorvalue = new ParkingFloor(3);
// console.log(parkingFloorvalue);

// let ParkingLotData = new ParkingLot(3);
// console.log(ParkingLotData);

let p1 = new ParkingLot(3);
let c1 = new Car("Car", "mh29");
p1.parkVehicle(c1);
