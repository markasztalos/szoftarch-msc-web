import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';


import { AppComponent } from './app.component';
import { IAppState, initialAppState, reducer } from './store';
import { AppStateActionsService } from './app-state-actions.service';
import { CommentsComponent } from './comments.component';
import { LoadCommentsComponent } from './load-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    LoadCommentsComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [AppStateActionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(reducer, initialAppState );
  }
}
