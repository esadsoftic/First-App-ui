import { Component } from '@angular/core';

import { User } from '../../models/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

  export class UserComponent {

      user: User;
               // exmaples of different properties
        // firstHero: string;
        // lastHero: string;
        // age: number;
        // address;
        //
        // foo: any;
        // hasKids: boolean;
        // numberArray: number[];
        // stringArray: string[];
        // mixedArray: any[];
        // myTuple = [string, number, boolean];


  // Methods
  constructor() {
    this.user = {
      firstHero: 'Bat',
      lastHero: 'Man',
      age: 30,
      address: {
        street: '123 LookAtMe st',
        city: 'Meeseeks',
        state: 'MR'
      }
    }

  // this.firstHero = 'Bat';
  // this.lastHero = 'Man';
  //
  // this.address = {
  //   street: '123 LookAtMe st',
  //   city: 'Meeseks',
  //   state: 'MR'
  // }

  // this.foo = true;
  // this.hasKids = true;
  // this.numberArray = [1, 2, 3];
  // this.stringArray = ['hello', 'world'];
  // this.mixedArray = [true, undefined, 'hello'];
  // this.myTuple = [ 'hello', 1, true, 'hello'];


  // console.log(this.addNumbers(2, 3));
    }

  // addNumbers(num1: number, num2: number): number {
  // return num1 + num2;
  }


