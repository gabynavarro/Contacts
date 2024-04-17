import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interface/person.interface';
import { ENDPOINT } from '../../../share/constants/endpoint.constant';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http:HttpClient ) { }
private apiUrl=ENDPOINT.api

getContacts():Observable<Person[]>{
  return this.http.get<Person[]>(this.apiUrl+'/person/all')
 }

}
