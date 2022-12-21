// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
//con las propiedades de alto y ancho, mas los métodos necesarios 
//para modificar y mostrar sus propiedades, 
//calcular el perímetro y el área

class Rectangulo{
    constructor(lado1,lado2){
    this.alto=lado1;
    this.ancho=lado2;
}
set cambiarAlto(nuevaAltura){
    this.alto=nuevaAltura;
}
set cambiarAncho(nuevoAncho){
    this.ancho=nuevoAncho;
}
get area(){
    return this.alto*this.ancho;
}
get perimetro(){
return 2*(this.alto+this.ancho);
}
detalle(){
    return `<p>El rectángulo tiene una altura de ${this.alto} cm y un ancho de ${this.ancho} cm </p>`;
}
}

document.write(`<h2>Primer rectángulo</h2>`);

let rectangulo1= new Rectangulo(10, 9);
document.write(rectangulo1.detalle());
document.write(`El área del rectángulo es ${rectangulo1.area} y su perímetro es ${rectangulo1.perimetro}`);

document.write(`<h3>Modificar rectángulo</h3>`);
rectangulo1.cambiarAlto=15;
rectangulo1.cambiarAncho=28;

document.write(rectangulo1.detalle());
document.write(`El área del rectángulo es ${rectangulo1.area} y su perímetro es ${rectangulo1.perimetro}`);


document.write(`<h2>Segundo rectángulo</h2>`);

let rectangulo2=new Rectangulo(5,15);

document.write(rectangulo2.detalle());
document.write(`El área del rectángulo es ${rectangulo2.area} y su perímetro es ${rectangulo2.perimetro}`);

document.write(`<h3>Modificar rectángulo</h3>`);
rectangulo2.cambiarAlto=23;
rectangulo2.cambiarAncho=45;

document.write(rectangulo2.detalle());
document.write(`El área del rectángulo es ${rectangulo2.area} y su perímetro es ${rectangulo2.perimetro}`);
