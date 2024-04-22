import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interface/person.interface';
import { ENDPOINT } from '../../../share/constants/endpoint.constant';
import { Contacts } from '../interface/contacts.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(
    private http:HttpClient ) { }
private apiUrl=ENDPOINT.api

getContacts():Observable<Contacts[]>{
  return this.http.get<Contacts[]>(this.apiUrl+'/contacts')
 }

 postPerson(payload: Contacts):Observable<any> {
  return this.http.post(this.apiUrl+'/contacts', payload);
 }

 deleteContact(_id: string): Observable<Contacts>{
  return this.http.delete<Contacts>(this.apiUrl+`/contacts/${_id}`)
 }

}
