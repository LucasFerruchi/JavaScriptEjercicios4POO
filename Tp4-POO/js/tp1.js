// 1- Crea un objeto llamado auto que tenga algunas características como 
//el color, marca, modelo y si está encendido o apagado. 
//Crea los métodos necesarios para permitir encender y apagar el auto.


let auto={
    color: 'Azul',
    marca: 'Fiat',
    modelo: 'Punto',
    motor: false,
    encender(){
        this.motor=true;
        },
        apagar(){
            this.motor=false;
        }
}

document.write('<br>Color: '+auto.color);
document.write('<br>Marca: '+auto.marca);
document.write('<br>Modelo: '+auto.modelo);
document.write('<br>Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));


//Auto encendido
auto.encender();
document.write('<br>Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));

//Auto apagado
auto.apagar();
document.write('<br>Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));


