import { Injectable } from '@angular/core';
import { IAppState, IComment } from './store';
import { NgRedux } from '@angular-redux/store';

export const ADD_COMMENT = "add-comment";

@Injectable()
export class AppStateActionsService {

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  public addComment(comment : IComment) {
    this.ngRedux.dispatch({type : ADD_COMMENT, comment});
  }



}
