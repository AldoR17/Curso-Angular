// Declarion de variables
let message: string = "Hola TypeScript"

// Uso de tipos
let count: number = 42;
let isDone: boolean = false;

//Funciones
function saludo (name: string) : string{
    return "hola $(name)";
}

//Clases y herencias
class Animal {
    public nombre: string = "Odin";
    private años: number = 7;
    protected reino: string  = "animalia";
}

constructor(nombre: string, años: number) {
    this.nombre = nombre;
    this.años = años;
    this.reino = "animal";
}

añosHumanos(){
    console.log ("Años humanos: ", this.años);
};

class Perro extends Animal {
    constructor(nombre: string, años: number){
        super(nombre, años);
    }

    sonido(): void {
        console.log( '${this.nombre} hace un ruido');
    }
}
function añosHumanos() {
    throw new Error("Function not implemented.");
}

function constructor(nombre: any, string: any, años: any, number: any) {
    throw new Error("Function not implemented.");
}

interface Shape{
    name: string;
    area():number;
    alias?: string;
}

class Circle implements Shape {
    constructor(
        public raidus: number,
        public name: string){

        } 
}

area(): number{
    return Math.PI * this.raidus ** 2;
}

const miCirculo = new Circle (5., "Circulo")
console.log(miCirculo.area())
