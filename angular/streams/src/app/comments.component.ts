import { Component, OnInit } from '@angular/core';
import { IAppState } from './store';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'comments',
  template: `
    <p *ngFor="let comment of comments"> <strong>{{comment.name}}</strong>: {{comment.text}} </p>
  `,
  styles: []
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @select((state: IAppState) => state.comments) comments$ : Observable<Comment[]>;

  ngOnInit() {
    this.comments$.subscribe(comments => {
      this.comments = comments;
    })
  }

  comments: Comment[];

}
