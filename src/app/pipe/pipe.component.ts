import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  p: number = 3.1345345345345
  str: string = 'super text for pipes'
  data = new Date()
  float = 0.55

  constructor() { }

  ngOnInit(): void {}

}
