export class Student {
    studentId: string;
    name: string;
    className: string;
    hometown: string;
    score: number;
    hobbies: string;

    constructor(studentId: string, name: string, className: string, hometown: string, score: number, hobbies: string) {
        this.studentId = studentId;
        this.name = name;
        this.className = className;
        this.hometown = hometown;
        this.score = score;
        this.hobbies = hobbies;
    }
}