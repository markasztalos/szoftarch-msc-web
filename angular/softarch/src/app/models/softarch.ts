import { Semester } from "./semester";
import { Student } from "./student";

export class SoftArchModel {
    semesters : Semester[];
    selectedSemester : Semester;

    get studentsOfCurrentSemester() : Student[] {
        return this.selectedSemester ? this.selectedSemester.students : [];
    }

    newStudentName : string;
    newStudentId : string;

    get canAddNewStudent() : boolean {
        return this.selectedSemester && 
            this.newStudentId &&
            this.newStudentName &&
            this.studentsOfCurrentSemester &&
            !this.studentsOfCurrentSemester.some(s => s.id.toLowerCase() === this.newStudentId.toLowerCase());
    }

    addNewStudent() {
        if (this.selectedSemester && this.selectedSemester.students) {
            let student = new Student();
            student.id = this.newStudentId;
            student.name = this.newStudentName;
            this.selectedSemester.students.push(student);
        }
    }
    deleteStudent(student : Student) {
        if (this.selectedSemester && this.selectedSemester.students) {
            let index = this.selectedSemester.students.indexOf(student);
            if (index >= 0)
                this.selectedSemester.students.splice(index, 1);
        }
    }
}