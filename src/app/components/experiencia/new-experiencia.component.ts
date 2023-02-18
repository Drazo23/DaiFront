import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-Experiencia.service';

@Component({
    selector: 'app-new-experiencia',
    templateUrl: './new-experiencia.component.html',
    styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
    experlabo = new Experiencia('', '', '')

    constructor(private sExperiencia: SExperienciaService, private router: Router){ }

    ngOnInit(): void {
        
    }
    onCreate(): void{
        this.sExperiencia.save(this.experlabo).subscribe(
            data=>{
                alert("Experiencia añadida");
                this.router.navigate(['']);
            },  err =>{
                alert("Fallo");
                this.router.navigate([''])
            }
        )
    }
}