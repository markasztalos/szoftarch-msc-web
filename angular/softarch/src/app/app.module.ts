import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SoftarchComponent } from './softarch/softarch.component';
import { SoftArchApiService } from './soft-arch-api.service';


@NgModule({
  declarations: [
    AppComponent,
    SoftarchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SoftArchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
