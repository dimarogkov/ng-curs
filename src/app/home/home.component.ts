import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';

export interface Post {
  id?: number,
  title: string,
  text: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [
    {id: 0, title: 'This is first post', text: 'Desc is so interesting.'},
    {id: 1, title: 'Mask create a new car model', text: 'New car have more functions than his before cars.'},
    {id: 2, title: 'Mask create', text: 'New car have his before cars.'}
  ];

  constructor(public counterServices: CounterService, private router: Router) {}

  ngOnInit(): void {}

  addPost(post: Post): void {
    this.posts.unshift(post);
  }

  removePost(id: number):void {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  goToPipesPage() {
    this.router.navigate(['/pipes']);
  }

}
