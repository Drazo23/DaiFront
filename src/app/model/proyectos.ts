export class Proyectos{
    id?: number;
    nombreP: string;
    descripcionP: string;
    url: String;
    year: String;

    constructor(nombreP: string, descripcionP: string, url: String, year: String){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.url = url;
        this.year = year;
    }
}