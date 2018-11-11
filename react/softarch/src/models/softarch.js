import { Semester } from "./semester";
import { Student } from "./student";

export class SoftArchModel {
    constructor() {
        this.semesters = []
        this.selectedSemester = null;
        this.newStudentName = '';
        this.newStudentId = '';

        this.getStudentsOfCurrentSemester = this.getStudentsOfCurrentSemester.bind(this);
        this.addNewStudent = this.addNewStudent.bind(this);
        this.canAddNewStudent = this.canAddNewStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    getStudentsOfCurrentSemester(){
        return this.selectedSemester ? this.selectedSemester.students : [];
    }

    canAddNewStudent() {
        return this.selectedSemester && 
            this.newStudentId &&
            this.newStudentName &&
            this.getStudentsOfCurrentSemester() &&
            !this.getStudentsOfCurrentSemester().some(s => s.id.toLowerCase() === this.newStudentId.toLowerCase());
    }

    addNewStudent() {
        if (this.selectedSemester && this.selectedSemester.students) {
            let student = new Student(this.newStudentName, this.newStudentId, 0,0,0,0 );
            this.selectedSemester.students.push(student);
        }
    }
    deleteStudent(student) {
        if (this.selectedSemester && this.selectedSemester.students) {
            let index = this.selectedSemester.students.indexOf(student);
            if (index >= 0)
                this.selectedSemester.students.splice(index, 1);
        }
    }
}