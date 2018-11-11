export class Student {

    constructor(name, id, exam1, exam2, finalExam, homework) {
        this.name = name;
        this.id = id;
        this.exam1 = exam1;
        this.exam2 = exam2;
        this.finalExam = finalExam;
        this.homework = homework;

        this.getTotalPoints = this.getTotalPoints.bind(this);
        this.getGrade = this.getGrade.bind(this);
    }

    getTotalPoints() {
        return Math.max(parseInt(this.exam1), parseInt(this.exam2)) + parseInt(this.finalExam) + parseInt(this.homework);
    }
    getGrade() {
        let total = this.getTotalPoints();
        if (total >= 85) { return 5; }
        if (total >= 70) { return 4; }
        if (total >= 55) { return 3; }
        if (total >= 40) { return 2; }
        return 1;
    }

}