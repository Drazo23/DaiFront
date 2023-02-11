import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
    providedIn: 'root' 
})
export class SkillService {
    constructor(
        private httpClient: HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig
      ) {}

    public lista(): Observable<Skill[]>{
       return this.httpClient.get<Skill[]>(this.config.apiEndpoint + '/skill/lista'); 
    }

    public detail(id: number): Observable<Skill>{
        return this.httpClient.get<Skill>(this.config.apiEndpoint + `/skill/detail/${id}`);
    }

    public save(skill: Skill): Observable<any>{
        return this.httpClient.post<any>(this.config.apiEndpoint + '/skill/create', skill);
    }
    public update(id: number, skill: Skill): Observable<any>{
        return this.httpClient.put<any>(this.config.apiEndpoint + `/skill/update/${id}`, skill);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.config.apiEndpoint + `/skill/delete/${id}`);
    }
}