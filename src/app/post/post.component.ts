import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Post } from '../home/home.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  @Output() onRemove: EventEmitter<Post> = new EventEmitter<Post>()

  ngOnInit(): void {}

  remove(id) {
    this.onRemove.emit(id);
  }

}
