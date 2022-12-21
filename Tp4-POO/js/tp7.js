// 7- Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. 
//Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
//Se podrá crear de dos formas: 
//indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, 
// sino la agenda no puede almacenar mas contactos indicar por pantalla.

// existeContacto(Conctacto): indica si el contacto pasado existe o no.

// listarContactos(): Lista toda la agenda

// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.

// eliminarContacto(Contacto c): elimina el contacto de la agenda, 
//indica si se ha eliminado o no por pantalla

// agendaLlena(): indica si la agenda está llena.

// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.


class Contacto{
    constructor(nombre, telefono){
        this.nombre=nombre;
        this.telefono=telefono
    }
    mostrarDatos(){
        document.write(`Nombre: ${this.nombre} Teléfono: ${this.telefono}`);
    }
    get obtenerNombre(){
        return this.nombre;
    }
    get obtenerTelefono(){
        return this.telefono;
    }
    set modificarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    set modificarTelefono(nuevoTelefono){
        this.telefono=nuevoTelefono;
    }
}

class Agenda{
    constructor(tamanio){
        this.contactos=[];
        this.tamanio=tamanio;
    }
    set modificarTamanio(cantidad){
        this.tamanio=cantidad;
    }
    agregarContacto(contacto){
        //verificar si el contacto existe
        if(this.existeContacto(contacto)){
            console.log("El contacto ya existe");
        }else{
            //verificar si la agenda esta llena
            if(!this.agendaLlena()){
                this.contactos.push(contacto);
                console.log("Contacto añadido");
                this.listarContactos();
            }
        }
    }
    existeContacto(contacto){
        const exist=this.contactos.find(
            (contactoExistente)=>contactoExistente.nombre===contacto.nombre
        );
        if(exist){
            console.log("El contacto existe");
            return true;
        }else{
            console.log("El contacto no existe");
            return false;
        }
    }

    listarContactos(){
        for (let i=0; i<this.contactos.length;i++){
            console.log(
                `Contacto: ${this.contactos[i].obtenerNombre} - Teléfono ${this.contactos[i].obtenerTelefono}`
            );
        }
    }

    buscarContacto(contacto){
        const encontrado=this.contactos.find(
            (existentes)=>existentes.nombre===contacto
        );
        if(encontrado){
            console.log(`Contacto encontrado, teléfono: ${contacto.telefono}`);
        }else{
            console.log("Este contacto no existe");
        }
    }

    eliminarContacto(contacto){
        let contactosFiltrados=this.contactos.filter(
            (contactoExistente)=>contactoExistente.nombre != contacto
        );
        this.contactos=contactosFiltrados;
        console.log("Contados almacenados" + this.contactos);
    }

    agendaLlena(){
        if(this.contactos.length===this.tamanio){
            console.log("Agenda llena");
            return true;
        }else{
            console.log("Espacio disponible");
            return false;
        }
    }

    huecosLibres(){
        let cantidadEspacios=this.tamanio - this.contactos.length;
        if(cantidadEspacios>0)
        console.log("Cantidad de espacio disponible " + cantidadEspacios);
        else console.log("La agenda no tiene espacio disponible");
    }
}

let agendaPrueba=new Agenda(10);

do{
    let opcion=parseInt(
        prompt(
            `Seleccione una opción:
            1- Agregar contacto
            2- Consultar contacto
            3- Lista de contactos
            4- Buscar contacto
            5- Eliminar contacto
            6- Consulta si la agenda esta llena
            7- Consulta espacio en la agenda
            8- Cambiar el tamaño de la agenda`
        )
    );
    switch(opcion){
        case 1:
            //Agregar contacto
           agendaPrueba.huecosLibres();
           let nombre=prompt("Ingrese nombre");
           let telefono=prompt("Ingrese un teléfono");
           let nuevoContacto=new Contacto(nombre, telefono);

           agendaPrueba.agregarContacto(nuevoContacto);
           break;
        case 2:
            //Consultar contacto
            let nombreBuscado=prompt("Ingrese el Nombre del contacto");
            let contacto=new Contacto(nombreBuscado, 0);
            agendaPrueba.existeContacto(contacto);
            
        case 3:
            //listar contactos
            agendaPrueba.listarContactos();
            break;
        case 4:
            //buscar contacto
            let contactoBuscado=prompt("Ingrese el nombre del contacto que busca");
            agendaPrueba.buscarContacto(contactoBuscado);
            break;
        case 5:
            //Eliminar contacto
            let contactoEliminar=prompt("Ingrese el nombre que desea eliminar");
            agendaPrueba.eliminarContacto(contactoEliminar);
            break;
        case 6:
            //Agenda llena
            agendaPrueba.agendaLlena();
            break;
        case 7:
            //Huecos en la agenda
            agendaPrueba.huecosLibres();
            break;
        case 8:
            //Cambiar tamaño
            let nuevoTamanio=parseInt(
                prompt("Ingrese la cantidad de espacios que desea")
            );
            agendaPrueba.modificarTamanio=nuevoTamanio;
            console.log("Nuevo tamaño de su agenda: " + nuevoTamanio);
            break;
        default:
            document.write("Ingresó una opción inválida");
    }
}while(confirm("Quiere realizar otra operación?"))
