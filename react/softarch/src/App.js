import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SoftArchModel } from './models/softarch';
import { Semester } from './models/semester';
import { Student } from './models/student';
import {SoftArch} from './SoftArch';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.model = this.getInitialData();
  }

  getInitialData() {
    let model = new SoftArchModel();
    model.semesters = [
      new Semester("2016", []),
      new Semester("2017", []),
      new Semester("2018", [])
    ];
    model.selectedSemester = model.semesters[0];
    return model;
  }

  render() {

    return (
      <div>
        <SoftArch model={this.state.model} />
      </div>
    );
  }
}

export default App;





