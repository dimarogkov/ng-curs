import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostTwo, PostTwoService } from '../services/post-two.service';

@Component({
  selector: 'app-post-two',
  templateUrl: './post-two.component.html',
  styleUrls: ['./post-two.component.css']
})
export class PostTwoComponent implements OnInit {

  post: PostTwo

  constructor(
    private route: ActivatedRoute,
    private postTwoServices: PostTwoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.post = this.postTwoServices.getById(+val.id);
    });
  }

}
