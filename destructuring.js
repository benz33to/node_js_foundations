const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};


function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    // const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
};

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);

// const [ , , h3] = heroes;
// console.log(h3);
