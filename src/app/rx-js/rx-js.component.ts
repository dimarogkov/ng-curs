import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})

export class RxJsComponent implements OnInit {

  sub: Subscription
  subjectSub: Subscription
  subject$: Subject<number> = new Subject<number>()
  counter = 0

  constructor() {
    const intervalStream$ = interval(1000);

    this.sub = intervalStream$
    .pipe(
      filter(val => val % 2 === 0),
      map(val => `Map string ${val}`)
    )
    .subscribe(val => console.log(val));

    this.subjectSub = this.subject$.subscribe(val => console.log('Subject - ' + val));
  }

  ngOnInit(): void {}

  stop() {
    this.sub.unsubscribe();
  }

  stopSubject() {
    this.subjectSub.unsubscribe();
  }

  next() {
    this.counter++
    this.subject$.next(this.counter);
  }

}
