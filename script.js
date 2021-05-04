/* EXAMPLE */

class Dog {
    constructor(name, breed, isGoodBoy) {
        this.name = name;
        this.breed = breed;
        this.isGoodBoy = isGoodBoy;
    }

   sit() {
       // sitting code here
   }
   fetch() {
       // fetching code here
   }
}


/* SOLUTION */

class Traveler {
    constructor(name, food = 1, isHealthy = true) {
        this.name = name; // string
        this.food = food; // número com valor inicial 1
        this.isHealthy = isHealthy; // boolean - indica se está doente - inicia com TRUE
    }

    hunt() {
        let travelerFood = 2;
        this.food += travelerFood;
    }

    eat() {
        if (this.food === 0 || this.food < 0) {
            this.isHealthy = false;
            this.food = 0;
        } else { 
            this.food--;
        }
    }
};

class Wagon {
    constructor(capacity, passengers = []) {
        this.capacity = capacity; // número - quantidade máxima de passageiros
        this.passengers = passengers; // array - inicialmente vazio
    }

    getAvailableSeatCount() {
        let emptySeats = this.capacity - this.passengers.length;

        if (emptySeats < 0) {
            return 0;
        } else {
            return emptySeats;
        }
    }

    join(traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler);
        }
    }

    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false) {
                return false;
            } else {
                return true;
            }
        }
    }

    totalFood() {
        let allFood = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            allFood = allFood + this.passengers[i].food;
        }
        return allFood;
    }
};

/* TEST */

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);