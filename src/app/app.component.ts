import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import 'rxjs/add/operator/map';
import {Person} from './models/person';
import {GoServices} from './services/go-services';
// import {map} from 'rxjs/operators';

// import { FormGroup, FormBuilder, FormArray } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'test-app';
  people: Person[] = [];
  // ---- old stuff -- showAddPerson: boolean = false;
  // selectedPerson: person;
  // currentPerson: Person = {
  //   Id: 0,
  //   name: '',
  //   lastname: '',
  //   age: ''
  // }
  // name: string;



  constructor(public goService: GoServices) {
  }

  ngOnInit() {
    this.fetchDataFromServer();
  }

  fetchDataFromServer() {
    this.goService.allPersonEndpoint().subscribe((p: Person[]) => {
      this.people = p;
    });
  }
// selectedPerson: Person;
  onSelect(person: Person): void{
    // this.selectedPerson = person;
  }

  // callAll(){
  //   this.fetchDataFromServer(),
  //   this.addPerson(input);
  // }


  // save(person: Person): void {
  //   this.people.updateHero(this.hero)
  //     .subscribe(() => this.goBack());
  // }



  addPerson(nameInput, lnameInput, ageInput) {
    const newPerson = new Person();

    const name = nameInput.value;
    newPerson.name = name;
    const lname = lnameInput.value;
    newPerson.lname = lname;
    const age: number = Number(ageInput.value);
    newPerson.age = age;

    this.goService.insertPersonEndpoint(newPerson).subscribe((result) => {
      console.log('success');
      this.fetchDataFromServer();

    }, (error) => console.log(error));
  }


  delete(person: Person): void {
    this.people = this.people.filter((p) => p !== person);
    this.goService.deletePersonEndpoint(person).subscribe();
  }




}







// onNewPerson(person: Person){
//   this.p.unshift(person);
// }
//
//
//
//   editPerson(person: Person){
//      this.currentPerson = person;
// }




