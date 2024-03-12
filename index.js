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
  constructor(slotNumber, vechicalType) {
    this.slotNumber = slotNumber;
    this.vechicalType = vechicalType;
    this.slotBooked = false; //we need to change based on booking
  }
  //setter and getter->
  get _slotBooked() {
    return this.slotBooked;
  }
  set _slotBooked(bool) {
    this.slotBooked = bool;
  }
}
