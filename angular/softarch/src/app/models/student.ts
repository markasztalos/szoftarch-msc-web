export class Student {
    name: string;
    id: string;
    exam1: number = 0;
    exam2: number = 0;
    finalExam: number = 0;
    homework: number = 0;

    get totalPoints(): number {
        return Math.max(this.exam1, this.exam2) + this.finalExam + this.homework;
    }
    get grade(): number {
        let total = this.totalPoints;
        if (total >= 85) { return 5; }
        if (total >= 70) { return 4; }
        if (total >= 55) { return 3; }
        if (total >= 40) { return 2; }
        return 1;
    }

}