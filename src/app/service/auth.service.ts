import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { Nuevousuario } from '../model/nuevo-usuario';
import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private httpCliente: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  public nuevo(nuevoUsuario: Nuevousuario): Observable<any> {
    return this.httpCliente.post<any>(this.config.apiEndpoint + '/auth/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpCliente.post<JwtDto>(this.config.apiEndpoint + '/auth/login', loginUsuario);
  }
}
