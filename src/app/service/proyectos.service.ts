import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';
import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
    providedIn: 'root'
})
export class ProyectosService{
    constructor(
        private httpClient: HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig
      ) {}
    public lista(): Observable<Proyectos[]>{
        return this.httpClient.get<Proyectos[]>(this.config.apiEndpoint + '/proyectos/lista');
    }
    public detail(id: number): Observable<Proyectos>{
        return this.httpClient.get<Proyectos>(this.config.apiEndpoint +`/proyectos/detail/${id}`);
    }
    public save(proyectos: Proyectos): Observable<any>{
        return this.httpClient.post<any>(this.config.apiEndpoint + '/proyectos/create', proyectos);
    }
    public update(id: number, proyectos: Proyectos): Observable<any>{
        return this.httpClient.put<any>(this.config.apiEndpoint + `/proyectos/update/${id}`, proyectos);
    }
    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.config.apiEndpoint + `/proyectos/delete/${id}`);
    }

}