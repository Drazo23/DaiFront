import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
    providedIn: 'root'
})
export class SExperienciaService{
    constructor(
        private httpClient: HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig
      ) {}

    public lista(): Observable<Experiencia[]>{
        return this.httpClient.get<Experiencia[]>(this.config.apiEndpoint + '/experlabo/lista');
    }
    
    public detail(id: number): Observable<Experiencia>{
        return this.httpClient.get<Experiencia>(this.config.apiEndpoint + `/experlabo/detail/${id}`);
    }

    public save(experiencia: Experiencia): Observable<any>{
        return this.httpClient.post<any>(this.config.apiEndpoint + '/experlabo/create', experiencia)
    }

    public update(id: number, experiencia: Experiencia): Observable<any>{
        return this.httpClient.put<any>(this.config.apiEndpoint + `/experlabo/update/${id}`, experiencia);
    }
    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.config.apiEndpoint + `/experlabo/delete/${id}`);
    }

}
