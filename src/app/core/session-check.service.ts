import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Validity } from '@interfaces/auth';
import { Observable } from 'rxjs';

@Injectable()
export class SessionCheckService {

  constructor(private http: HttpClient){}

  public checkValidity(token: string): Observable<Validity> {
    const auth: HttpHeaders = new HttpHeaders({'Authorization': token});
    return this.http.post<Validity>(`${environment.URL_API_JUPITER}/api-jupiter/auth/verify`, null, { headers: auth });
  };

  public checkToken(): boolean {
    const token: string = localStorage.getItem('auth') || '!';
    if(token != '!'){
      return true;
    } else {
      return false;
    };
  };

  public checkProfile(token: string): string {
    if(token != '!'){
      const payload: string = atob(token.split('.')[1]);
      const profileAtribute: string = payload.split(',')[1];
      const profile: string = profileAtribute.split('"')[3];
      return profile;
    } else {
      return 'invalid'
    };
  };

}
