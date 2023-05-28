import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count = 0;

  constructor() { }

  increaseCount(){
  this.count++;
    console.log(this.count)
  }
}
