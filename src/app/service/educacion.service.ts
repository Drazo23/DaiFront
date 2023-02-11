import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
    providedIn: 'root'
})
export class EducacionService{
    constructor(
        private httpClient: HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig
      ) {}

    public lista(): Observable<Educacion[]>{
        return this.httpClient.get<Educacion[]>(this.config.apiEndpoint + '/educacion/lista');
    }
    public detail(id: number): Observable<Educacion>{
        return this.httpClient.get<Educacion>(this.config.apiEndpoint +`/educacion/detail/${id}`);
    }
    public save(educacion: Educacion): Observable<any>{
        return this.httpClient.post<any>(this.config.apiEndpoint + '/educacion/create', educacion);
    }
    public update(id: number, educacion: Educacion): Observable<any>{
        return this.httpClient.put<any>(this.config.apiEndpoint + `/educacion/update/${id}`, educacion);
    }
    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.config.apiEndpoint + `/educacion/delete/${id}`);
    }
}