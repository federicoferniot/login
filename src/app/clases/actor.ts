export class Actor {
    public id;
    public nombre;
    public apellido;
    public sexo;
    public fechaNacimiento;
    public foto;

    constructor(id, nombre, apellido, sexo, fechaNacimiento, foto){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.foto = foto;
    }
}
