class Animal {
  #hunger;
  #energy;

  constructor(name, age, species, hunger = 50, energy = 50) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.#hunger = hunger;
    this.#energy = energy;
  }

  get hunger() {
    return this.#hunger;
  }

  get energy() {
    return this.#energy;
  }

  makeSound() {
    return "Тварина видає звук";
  }

  eat(food) {
    this.#hunger = Math.max(0, this.#hunger - 20);
    return `${this.name} їсть ${food}. Голод: ${this.#hunger}`;
  }

  sleep(hours) {
    this.#energy = Math.min(100, this.#energy + hours * 10);
    return `${this.name} спить ${hours} год. Енергія: ${this.#energy}`;
  }

  move() {
    this.#energy = Math.max(0, this.#energy - 15);
    this.#hunger = Math.min(100, this.#hunger + 10);
    return `${this.name} рухається. Енергія: ${this.#energy}, голод: ${this.#hunger}`;
  }

  getInfo() {
    return `${this.name}, ${this.species}, вік: ${this.age}, голод: ${this.#hunger}, енергія: ${this.#energy}`;
  }

  static classify(animal) {
    return animal.species;
  }
}

class Mammal extends Animal {
  constructor(name, age, species, furColor, numberOfLegs) {
    super(name, age, species);
    this.furColor = furColor;
    this.numberOfLegs = numberOfLegs;
  }

  makeSound() {
    return `${this.name}: Р-р-р!`;
  }
}

class Bird extends Animal {
  constructor(name, age, species, canFly, wingSpan) {
    super(name, age, species);
    this.canFly = canFly;
    this.wingSpan = wingSpan;
  }

  makeSound() {
    return `${this.name}: Чірік-чірік!`;
  }
}

class Fish extends Animal {
  constructor(name, age, species, waterType) {
    super(name, age, species);
    this.waterType = waterType;
  }

  makeSound() {
    return `${this.name}: Буль-буль!`;
  }
}

class Zoo {
  constructor(name) {
    this.name = name;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  feedAll(food) {
    return this.animals.map(animal => animal.eat(food));
  }

  sleepAll(hours) {
    return this.animals.map(animal => animal.sleep(hours));
  }

  getStatistics() {
    return {
      totalAnimals: this.animals.length,
      mammals: this.animals.filter(a => a instanceof Mammal).length,
      birds: this.animals.filter(a => a instanceof Bird).length,
      fish: this.animals.filter(a => a instanceof Fish).length
    };
  }
}

const zoo = new Zoo("Мій зоопарк");

zoo.addAnimal(new Mammal("Лев", 5, "Mammal", "Жовтий", 4));
zoo.addAnimal(new Mammal("Ведмідь", 7, "Mammal", "Коричневий", 4));
zoo.addAnimal(new Bird("Папуга", 2, "Bird", true, 30));
zoo.addAnimal(new Fish("Немо", 1, "Fish", "Морська"));

const output = document.getElementById("output");

function showAnimals() {
  output.innerHTML = "";

  zoo.animals.forEach(animal => {
    output.innerHTML += `
      <div class="card">
        <h3>${animal.name}</h3>
        <p>${animal.getInfo()}</p>
        <p>${animal.makeSound()}</p>
      </div>
    `;
  });
}

function feedAnimals() {
  const results = zoo.feedAll("їжу");

  output.innerHTML = results
    .map(result => `<div class="card">${result}</div>`)
    .join("");
}

function animalsSleep() {
  const results = zoo.sleepAll(2);

  output.innerHTML = results
    .map(result => `<div class="card">${result}</div>`)
    .join("");
}

function showStats() {
  const stats = zoo.getStatistics();

  output.innerHTML = `
    <div class="card">
      <h3>Статистика зоопарку</h3>
      <p>Усього тварин: ${stats.totalAnimals}</p>
      <p>Ссавці: ${stats.mammals}</p>
      <p>Птахи: ${stats.birds}</p>
      <p>Риби: ${stats.fish}</p>
    </div>
  `;
}

showAnimals();