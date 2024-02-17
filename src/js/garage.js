/* Main issue with my Garage: Get and Delete aren't asynchronous and as such, run before the number plates are loaded resulting in incorrect messages. 
However, logically they function correctly. */

class Car {
    constructor(image, reg, make, model, year) {
        this.image = image;
        this.reg = reg;
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

export class Garage {
    constructor() {
        this.cars = [];
    }

    get count() {
        return this.cars.length;
    }

    get(reg) {
        const car = this.cars.find(car => car.reg === reg);
        if (car) {
            return car;
        } else {
            return "Car is not in the garage";
        }
    } 

    async add(car) {
        const regex = /^[a-z0-9] + $/i;
        const reg = new String(car.reg).split(" ").join("");
        if (car.reg !== undefined && regex.test(reg) === false) {
            const data = await fetchCarData(car.reg);
            if (data != null) {
                const newCar = new Car(null, data.registrationNumber, data.make, null, data.yearOfManufacture);
                this.cars[this.count] = newCar;
            }
        }
    }

    delete(reg){
        const car = this.cars.find(car => car.reg === reg);
        if (car) {
            const index = this.cars.indexOf(car);
            const carObj = this.cars.splice(index, 1);
            return carObj[0];
        } else {
            return "Car is not in the garage";
        }
    }
}

async function fetchCarData(reg) {
    try {
        const response = await fetch('http://localhost:8080/api/vehicle/' +  reg, options);
        const data = await response.json();
        if (data.errors) {
            console.log("Invalid Number Plate");
            return null;
        }
        return data;
    } catch (error) {
        console.error(error);
    }
}

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};


