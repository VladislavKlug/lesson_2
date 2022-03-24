class Aviation {
    constructor() {
        this.airplane = [];
    }

    addAirplane(airplane) {
        this.airplane.push(airplane);
    }

    getCommonPrice() {
        return this.airplane.map(obj => obj.price)
            .reduce((a, b) => a + b);
    }

    getCommonValue(name) {
        return this.airplane.map(obj => obj[name])
            .reduce((a, b) => a + b);
    }

    sortRangeOfFlight() {
        return this.airplane.sort((a, b) => a.rangeOfFlight - b.rangeOfFlight);
    }

    filterCargoAirplane() {
        return this.airplane.filter(name => {
            if(name.capacity) {
                return name;
            }
        })
    }
}

class Aircraft {
    constructor(model, country, price, rangeOfFlight) {
        this.model = model;
        this.country = country;
        this.price = price;
        this.rangeOfFlight = rangeOfFlight;
    }

    init() {
        return new Aircraft(this.model, this.country, this.price, this.rangeOfFlight);
    }
}

class Airplane extends Aircraft {
    constructor(model, country, price, numberOfPassangers) {
        super(model, country, price);
        this.numberOfPassangers = numberOfPassangers;
    }
}

class CargoAirplane extends Aircraft {
    constructor(model, country, price, capacity) {
        super(model, country, price);
        this.capacity = capacity;
    }
}

const airBase = new Aviation();
airBase.addAirplane(new Airplane('Boeing', 'USA', 700000, 5000));
airBase.addAirplane(new Airplane('Airbus', 'Poland', 1500000, 4500));
airBase.addAirplane(new Airplane('Airbus', 'Russia', 800000, 6000));
airBase.addAirplane(new Airplane('Boeing', 'Italia', 500000, 3000));

airBase.addAirplane(new CargoAirplane('Boeing', 'Belarus', 600000, 1500, 1000));
airBase.addAirplane(new CargoAirplane('Airbus', 'Iran', 1000000, 3000, 2000));
airBase.addAirplane(new CargoAirplane('Boeing', 'France', 900000, 4000, 5000));
airBase.addAirplane(new CargoAirplane('Boeing', 'Russia', 700000, 2000, 4000));


console.log(airBase.getCommonValue('price'));
console.log(airBase);
console.log(airBase.sortRangeOfFlight());
console.log(airBase.filterCargoAirplane());
console.log(airBase);
