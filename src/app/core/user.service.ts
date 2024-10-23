import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@environment';
import { ServiceStatus } from '@interfaces/services';
import { Access, LoginData, User, UserBody, UserCreation, UserDeleted, UserUpdate } from '@interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { };

  public checkService(): Observable<ServiceStatus> {
    const service: Observable<ServiceStatus> = this.http.get<ServiceStatus>(env.URL_API_MARS);
    return service;
  };

  public getAccess(loginData: LoginData): Observable<Access> {
    const access: Observable<Access> = this.http.post<Access>(`${env.URL_API_MARS}/users/check`, loginData);
    return access;
  };

  public getTokenExpDate(): Date {
    const token: string = localStorage.getItem('auth') || '!';
    const dataToken: string = atob(token.split('.')[1]);
    const exp: string = dataToken.split(',')[2].split(':')[1];
    const tokenExp = new Date(Number(exp) * 1000);
    return tokenExp;
  };

  public renewSession(): void {
    const userEmail: string = atob(String(localStorage.getItem('x-api-user'))) || '!';
    const userPass: string = atob(String(localStorage.getItem('x-api-auth'))) || '!';
    if(userEmail != '!' && userPass != '!'){
      const access: Observable<Access> = this.getAccess({ email: userEmail, passwd: userPass });
      access.subscribe(res => {
        if (res.access == true) {
          localStorage.setItem('auth', res.token);
        };
      });
    };
  };

  public getUsers(token: string): Observable<User[]>{
    const auth: HttpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    const users: Observable<User[]> = this.http.get<User[]>(`${env.URL_API_MARS}/users`, { headers: auth });
    return users;
  };

  public createUser(user: UserBody, token: string): Observable<UserCreation> {
    const auth: HttpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const create: Observable<UserCreation> = this.http.post<UserCreation>(`${env.URL_API_MARS}/users/create`, user, { headers: auth });
    return create;
  };

  public updateUser(id: number, user: UserBody): Observable<UserUpdate> {
    const update: Observable<UserUpdate> = this.http.put<UserUpdate>(`${env.URL_API_MARS}/users/update?id=${id}`, user);
    return update;
  };

  public deleteUser(idUser: number): Observable<UserDeleted> {
    const delUser = this.http.delete<UserDeleted>(`${env.URL_API_MARS}/users/delete?id=${idUser}`);
    return delUser;
  };

}
