import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT } from '../../../share/constants/endpoint.constant';
import { Observable } from 'rxjs';
import { User, UserPayload } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService { constructor(
  private http: HttpClient
) { }

login(payload: UserPayload ): Observable<User[]>{
  return this.http.post<User[]>(`${ENDPOINT.api}/auth/login`, payload)
}

}
