export class Educacion{
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaFinalizacion: string;

    constructor(nombreE: string, descripcionE: string, fechaFinalizacion: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaFinalizacion = fechaFinalizacion;
    }
}