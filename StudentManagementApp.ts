import {Student} from "./student";

export class StudentManagementApp {
    studentList: Student[] = [];

    constructor() {
    }

    displayStudents() {
        if (this.studentList.length === 0) {
            console.log("Không có dữ liệu");
        } else {
            this.studentList.slice(0, 5).forEach((student) => {
                console.log("Mã sinh viên:", student.studentId);
                console.log("Tên sinh viên:", student.name);
                console.log("Lớp:", student.className);
                console.log("Quê quán:", student.hometown);
                console.log("Điểm:", student.score);
                console.log("Sở thích:", student.hobbies);
                console.log("-------------------");

            });
        }
    }

    searchStudentByName(name: string) {
        // @ts-ignore
        let check = false
        for (let i = 0; i < this.studentList.length - 1; i++) {
            if (name === this.studentList[i].name) {
                console.log("Mã sinh viên:", this.studentList[i].studentId);
                console.log("Tên sinh viên:", this.studentList[i].name);
                console.log("Lớp:", this.studentList[i].className);
                console.log("Quê quán:", this.studentList[i].hometown);
                console.log("Điểm:", this.studentList[i].score);
                console.log("Sở thích:", this.studentList[i].hobbies);
                console.log("-------------------");
                break
            } else {
                check = true
            }
            if (check) {
                console.log("============không có dữ liệu phù hợp============")
            }
        }
    }

    addStudent(student: Student) {
        if (student !== undefined) {
            this.studentList.push(student)
        }
        console.log("Thêm sinh viên thành công");
    }

    updateStudent(studentId: string, newData: Student) {
        // @ts-ignore
        const studentIndex = this.studentList.findIndex(
            (student) => student.studentId === studentId
        );

        if (studentIndex === -1) {
            console.log("Không tồn tại sinh viên cần cập nhật");
            return;
        }

        // Kiểm tra dữ liệu đầu vào
        if (!this.validateStudentData(newData)) {
            console.log("Dữ liệu không hợp lệ");
            return;
        }

        this.studentList[studentIndex] = newData;
        console.log("Cập nhật thông tin sinh viên thành công");
        console.table(this.studentList)
    }

    deleteStudent(studentId: string) {
        // @ts-ignore
        const studentIndex = this.studentList.findIndex(
            (student) => student.studentId === studentId
        );

        if (studentIndex === -1) {
            console.log("Không tồn tại sinh viên cần xoá");
            return;
        }

        this.studentList.splice(studentIndex, 1);
        console.log("Xoá sinh viên thành công");
        console.table(this.studentList)
    }

    validateStudentData(student: Student): boolean {
        if (
            !student.studentId ||
            !student.name ||
            !student.className ||
            !student.hometown ||
            !student.score ||
            !student.hobbies
        ) {
            return false;
        }

        return !(typeof student.score !== "number" || student.score < 0);


    }
}

