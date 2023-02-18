import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
    selector: 'app-neweducacion',
    templateUrl: './neweducacion.component.html',
    styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
    educacion: Educacion = new Educacion('', '', '');

    constructor(private educacionS: EducacionService, private router: Router){}

    ngOnInit(): void {
       
    }
    onCreate(): void{
        this.educacionS.save(this.educacion).subscribe(
            data =>{
                alert("Educacion añadida correctamente");
                this.router.navigate(['']);
            }, err =>{
                alert("fallo");
                this.router.navigate(['']);
            }
        )
    }

}