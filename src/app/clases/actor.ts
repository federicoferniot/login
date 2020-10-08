export class Actor {
    public id;
    public nombre;
    public apellido;
    public sexo;
    public fechaNacimiento;
    public foto;
    public nacionalidad;

    constructor(id, nombre, apellido, sexo, fechaNacimiento, foto, nacionalidad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.foto = foto;
        this.nacionalidad = nacionalidad;
    }
}
