export class Pelicula {
    nombre : string = "";
    tipo : string = "";
    fechaDeEstreno : any = new Date();
    cantidadPublico : string = "";
    fotoPelicula : string = "";
    actor : string = "";

    constructor(nombre : string, tipo : string = "",cantidadPublico : string = "", fechaDeEstreno : string, fotoPelicula : string = "",actor = "")
    {
        this.actor = actor;
        this.nombre = nombre;
        this.tipo = tipo;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
        this.fechaDeEstreno = fechaDeEstreno;
    }
}
