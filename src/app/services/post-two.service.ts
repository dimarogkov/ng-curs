import { Injectable } from '@angular/core';

export interface PostTwo {
  "id": number,
  "title": string,
  "text": string
}

@Injectable({
  providedIn: 'root'
})
export class PostTwoService {

  postsTwo: PostTwo[] = [
    {id: 1, title: "Post 1", text: "Lorem is good"},
    {id: 3, title: "Post 3", text: "Lorem is good adsd"},
    {id: 16, title: "Post 16", text: "Lorem is good asddsad"},
    {id: 9, title: "Post 9", text: "Lorem is good sadsdsad"},
    {id: 11, title: "Post 11", text: "Lorem is good asdasda"},
    {id: 12, title: "Post 12", text: "Lorem is good sss"}
  ];

  constructor() {}

  getById(id:number) {
    return this.postsTwo.find(val => val.id === id);
  }
}
