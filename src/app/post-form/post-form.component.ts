import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Post } from '../home/home.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() postsLenth: Post
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('inputTitle') inputRef: ElementRef

  title = ''
  text = ''

  ngOnInit(): void {}

  addPost(){
    if(this.title.trim() && this.text.trim()) {
      const post: Post = {
        id: +this.postsLenth,
        title: this.title,
        text: this.text
      }
      
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }

  focus() {
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }

}
