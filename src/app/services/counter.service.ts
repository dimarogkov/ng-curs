import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  counter = 0

  constructor(private logServices: LogService) {}

  plus() {
    this.counter++;
    this.logServices.log('plus');
  };
  minus() {
    this.counter--;
    this.logServices.log('minus');
  };
}
