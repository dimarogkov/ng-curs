import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostTwo, PostTwoService } from '../services/post-two.service';

@Component({
  selector: 'app-posts-two',
  templateUrl: './posts-two.component.html',
  styleUrls: ['./posts-two.component.css']
})
export class PostsTwoComponent implements OnInit {

  posts: PostTwo[] = []
  showIds = false

  constructor(
    private postTwoServices: PostTwoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.posts = this.postTwoServices.postsTwo;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
    });
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      },
      fragment: "fragment"
    })
  }

}
