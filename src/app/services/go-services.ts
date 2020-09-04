import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../models/person';
import {AppComponent} from '../app.component';


@Injectable()
export class GoServices {
  goUrl: string = 'http://localhost:8080';



  constructor(private http: HttpClient) {}

  allPersonEndpoint(): Observable<Person[]> {
    return this.http.get<Person[]>(this.goUrl + '/people');
  }

  getPersonEndpoint(id: string): Observable<Person> {
    return this.http.get<Person>( this.goUrl + '/people/' + id);
  }

  insertPersonEndpoint(person: Person): Observable<Person> {
    console.log(person);
    return this.http.post<Person>(this.goUrl + '/people', person, {headers: {'Content-Type': 'application/json'}});
  }

  updatePersonEndpoint(person: Person): Observable<void> {
    return this.http.put<void>( this.goUrl + '/people', person, {headers: {'Content-Type': 'application/json'}});
  }

  deletePersonEndpoint(person: Person): Observable<Person> {
    return this.http.delete<Person>( this.goUrl + '/people/' + person.id);
  }
}
