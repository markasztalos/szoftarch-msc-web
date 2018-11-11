import { Component, OnInit } from '@angular/core';
import { AppStateActionsService } from './app-state-actions.service';
import { IComment } from './store';

@Component({
  selector: 'load-comments',
  template: `
    <button (click)="loadMoreComments()">Load more</button>
  `,
  styles: []
})
export class LoadCommentsComponent implements OnInit {

  constructor(private actionsSvc: AppStateActionsService) { }

  ngOnInit() {
  }


  generateRandomComment(): Promise<IComment> {
    let counter = Math.ceil(Math.random() * 1000);
    let comment = {
      name: `Sender_${counter}`,
      text: `Comment text ${counter}`
    } as IComment;

    return Promise.resolve(comment);
  }

  async loadMoreComments() {
    let comment = await this.generateRandomComment();
    this.actionsSvc.addComment(comment);
  }
}
