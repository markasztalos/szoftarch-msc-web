import { Component, OnInit } from '@angular/core';
import { SoftArchModel } from '../models/softarch';
import { Semester } from '../models/semester';
import { SoftArchApiService } from '../soft-arch-api.service';

@Component({
  selector: 'softarch',
  templateUrl: './softarch.component.html',
  styles: []
})
export class SoftarchComponent implements OnInit {

  constructor(private softArchApi : SoftArchApiService) {


   }

  ngOnInit() {
    this.model = this.softArchApi.getInitialData();
  }

  model : SoftArchModel = null;

  get selectedSemesterId() : string {
    return this.model.selectedSemester ? this.model.selectedSemester.id : null;
  }
  set selectedSemesterId(value : string) {
    this.model.selectedSemester = this.model.semesters.find(s => s.id === value);
  }

}
