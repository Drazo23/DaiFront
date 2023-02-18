import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
    selector: 'app-editproyectos',
    templateUrl:'./editproyectos.component.html',
    styleUrls:['./editproyectos.component.css']
})

export class EditproyectosComponent implements OnInit{
    proyecto: Proyectos = null;
    constructor(
        private proyectosS: ProyectosService,
        private activatedRouter : ActivatedRoute,
        private router: Router
    ) {}
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.proyectosS.detail(id).subscribe(
            data =>{
                this.proyecto = data;
            }, err =>{
                alert("Error al modificar");
                this.router.navigate(['']);
            }
        )   
    }
    
    onUpdate(): void{
     const id = this.activatedRouter.snapshot.params['id'];
     this.proyectosS.update(id, this.proyecto).subscribe(
        data => {
           this.router.navigate(['']); 
        }, err => {
            alert("Error al modificar el proyecto");
            this.router.navigate([''])
        }
     )   
    }
}