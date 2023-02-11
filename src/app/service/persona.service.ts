import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.config.apiEndpoint + '/personas/lista');
}
public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.config.apiEndpoint +`/personas/detail/${id}`);
}
/*public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.config.apiEndpoint + 'create', educacion);
}*/
public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.config.apiEndpoint + `/personas/update/${id}`, Persona);
}
/*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.config.apiEndpoint + `delete/${id}`);
}*/
}
