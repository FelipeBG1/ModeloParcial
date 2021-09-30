export class Actor {
    nombre : string;
    apellido : string;
    pais : string;
    bandera : string;

    constructor(nombre : string = "",apellido : string = "", pais : string = "", bandera : string = "")
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.bandera = bandera;
    }

}
