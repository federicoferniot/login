export class Pelicula {
    public id;
    public nombre;
    public tipo;
    public fechaEstreno;
    public cantidadPublico;
    public fotoPelicula;
    public origen;

    constructor(id, nombre, tipo, fechaEstreno, cantidadPublico, fotoPelicula, origen){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
        this.origen = origen;
    }
}
