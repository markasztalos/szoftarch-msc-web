import { Injectable } from '@angular/core';
import { SoftArchModel } from './models/softarch';
import { Semester } from './models/semester';

@Injectable()
export class SoftArchApiService {

  constructor() { }

  public getInitialData() : SoftArchModel {
    let model = new SoftArchModel();
    model.semesters = [
      new Semester("2016", []),
      new Semester("2017", []),
      new Semester("2018", [])
    ];
    model.selectedSemester = model.semesters[0];
    return model;
  }

}
