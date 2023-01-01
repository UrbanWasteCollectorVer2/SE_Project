class Janitor {
  name
  constructor(name) {
    this.name = name;
  }

  print2console() {
    console.log('Hi, ${this.name}')
  }
}



const giles = new Janitor('Giles');

giles.print2console(); // Hi! I'm Giles
