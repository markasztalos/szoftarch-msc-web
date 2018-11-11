import React, { Component } from 'react';

export class SoftArch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.model = this.props.model;

        this.onSelectedSemesterChange = this.onSelectedSemesterChange.bind(this);
        this.handleStudentNameChange = this.handleStudentNameChange.bind(this);
        this.handleStudentIdChange = this.handleStudentIdChange.bind(this); this.handleAddNewStudent = this.handleAddNewStudent.bind(this);
        this.handleStudentExam1Change = this.handleStudentExam1Change.bind(this);
    }

    handleStudentExam1Change(student, e) {
        student.exam1 = e.target.value;
        this.reRender();
    }
    handleStudentExam2Change(student, e) {
        student.exam2 = e.target.value;
        this.reRender();
    }
    handleStudentFinalExamChange(student, e) {
        student.finalExam = e.target.value;
        this.reRender();
    }
    handleStudentHomeworkChange(student, e) {
        student.homework = e.target.value;
        this.reRender();
    }
    handleStudentDeleted(student) {
        this.state.model.deleteStudent(student);
        this.reRender();
    }

    handleAddNewStudent(e) {
        e.preventDefault();
        this.state.model.addNewStudent();
        this.reRender();

    }

    handleStudentNameChange(e) {
        this.state.model.newStudentName = e.target.value;
        this.reRender();
    }

    handleStudentIdChange(e) {
        this.state.model.newStudentId = e.target.value;
        this.reRender();
    }

    onSelectedSemesterChange(e) {
        this.state.model.selectedSemester = this.state.model.semesters.find(s => s.id === e.target.value);
        this.reRender();
    }

    reRender() {
        this.setState(this.state.model);
    }

    render() {
        let semesterOptions = [];
        for (let semester of (this.state.model.semesters ? this.state.model.semesters : [])) {
            semesterOptions.push(
                <option onChange={this.onSelectedSemesterChange.bind(semester)} selected={semester === this.state.model.selectedSemester} value={semester.id}>{semester.id}</option>
            );
        }

        return (
            <div className="container-fluid">
                <h1>Software Architecture Course - Admin Page</h1>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            Select semester
                      </div>
                        <select value={this.state.model.selectedSemester.id} onChange={this.onSelectedSemesterChange}>
                            {(this.state.model.semesters ? this.state.model.semesters : []).map(semester => {
                                return <option key={semester.id} value={semester.id}>{semester.id}</option>
                            })}
                        </select>
                    </div>
                </div>



                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            Add new student
                         </div>
                        <form className="form-inline">
                            <label htmlFor="newStudentName">Name:</label>
                            <input type="text" value={this.state.model.newStudentName} onChange={this.handleStudentNameChange} name="newStudentName" />
                            <label htmlFor="newStudentId">ID:</label>
                            <input type="text" name="newStudentId" value={this.state.model.newStudentId} onChange={this.handleStudentIdChange} />
                            <button onClick={this.handleAddNewStudent} className="btn btn-default" disabled={!this.state.model.canAddNewStudent()}>Add student</button>
                        </form>
                    </div>
                </div>



                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Students of semester {this.state.model.selectedSemester.id}</div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Exam 1</th>
                                    <th>Exam 2</th>
                                    <th>Final Exam</th>
                                    <th>Homework</th>
                                    <th>Total</th>
                                    <th>Grade</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.model.getStudentsOfCurrentSemester().map(student => {
                                    return <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.id}</td>
                                        <td>
                                            <input type="number" value={student.exam1} onChange={(e) => this.handleStudentExam1Change(student, e)} />
                                        </td>
                                        <td>
                                            <input type="number" value={student.exam2} onChange={(e) => this.handleStudentExam2Change(student, e)} />
                                        </td>
                                        <td>
                                            <input type="number" value={student.finalExam} onChange={(e) => this.handleStudentFinalExamChange(student, e)} />
                                        </td>
                                        <td>
                                            <input type="number" value={student.homework} onChange={(e) => this.handleStudentHomeworkChange(student, e)}/>
                                        </td>
                                        <td>{student.getTotalPoints()}</td>
                                        <td>{student.getGrade()}</td>
                                        <td>
                                            <button onClick={() => this.handleStudentDeleted(student)}>Delete</button>
                                        </td>
                                    </tr>;
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
};