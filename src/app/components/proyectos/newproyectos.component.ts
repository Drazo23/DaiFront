import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
    selector: 'app-newproyectos',
    templateUrl: './newproyectos.component.html',
    styleUrls: ['./newproyectos.component.css']
})
export class NeweproyectosComponent implements OnInit{
    proyecto = new Proyectos('', '', '', '')

    constructor(private proyectosS: ProyectosService, private router: Router){}

    ngOnInit(): void {
       
    }
    onCreate(): void{
        this.proyectosS.save(this.proyecto).subscribe(
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