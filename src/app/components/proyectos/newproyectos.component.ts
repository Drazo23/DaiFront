import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
    selector: 'app-proyectos',
    templateUrl: './newproyectos.component.html',
    styleUrls: ['./newproyectos.component.css']
})
export class NeweproyectosComponent implements OnInit{
    nombreP: string;
    descripcionP: string;

    constructor(private proyectosS: ProyectosService, private router: Router){}

    ngOnInit(): void {
       
    }
    onCreate(): void{
        const proyectos = new Proyectos(this.nombreP, this.descripcionP);
        this.proyectosS.save(proyectos).subscribe(
            data =>{
                alert("Proyecto añadido correctamente");
                this.router.navigate(['']);
            }, err =>{
                alert("fallo");
                this.router.navigate(['']);
            }
        )
    }

}