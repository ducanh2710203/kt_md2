"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagementApp = void 0;
var StudentManagementApp = /** @class */ (function () {
    function StudentManagementApp() {
        this.studentList = [];
    }
    StudentManagementApp.prototype.displayStudents = function () {
        if (this.studentList.length === 0) {
            console.log("Không có dữ liệu");
        }
        else {
            this.studentList.slice(0, 5).forEach(function (student) {
                console.log("Mã sinh viên:", student.studentId);
                console.log("Tên sinh viên:", student.name);
                console.log("Lớp:", student.className);
                console.log("Quê quán:", student.hometown);
                console.log("Điểm:", student.score);
                console.log("Sở thích:", student.hobbies);
                console.log("-------------------");
            });
        }
    };
    StudentManagementApp.prototype.searchStudentByName = function (name) {
        // @ts-ignore
        var check = false;
        for (var i = 0; i < this.studentList.length - 1; i++) {
            if (name === this.studentList[i].name) {
                console.log("Mã sinh viên:", this.studentList[i].studentId);
                console.log("Tên sinh viên:", this.studentList[i].name);
                console.log("Lớp:", this.studentList[i].className);
                console.log("Quê quán:", this.studentList[i].hometown);
                console.log("Điểm:", this.studentList[i].score);
                console.log("Sở thích:", this.studentList[i].hobbies);
                console.log("-------------------");
                break;
            }
            else {
                check = true;
            }
            if (check) {
                console.log("============không có dữ liệu phù hợp============");
            }
        }
    };
    StudentManagementApp.prototype.addStudent = function (student) {
        if (student !== undefined) {
            this.studentList.push(student);
        }
        console.log("Thêm sinh viên thành công");
    };
    StudentManagementApp.prototype.updateStudent = function (studentId, newData) {
        // @ts-ignore
        var studentIndex = this.studentList.findIndex(function (student) { return student.studentId === studentId; });
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
        console.table(this.studentList);
    };
    StudentManagementApp.prototype.deleteStudent = function (studentId) {
        // @ts-ignore
        var studentIndex = this.studentList.findIndex(function (student) { return student.studentId === studentId; });
        if (studentIndex === -1) {
            console.log("Không tồn tại sinh viên cần xoá");
            return;
        }
        this.studentList.splice(studentIndex, 1);
        console.log("Xoá sinh viên thành công");
        console.table(this.studentList);
    };
    StudentManagementApp.prototype.validateStudentData = function (student) {
        if (!student.studentId ||
            !student.name ||
            !student.className ||
            !student.hometown ||
            !student.score ||
            !student.hobbies) {
            return false;
        }
        return !(typeof student.score !== "number" || student.score < 0);
    };
    return StudentManagementApp;
}());
exports.StudentManagementApp = StudentManagementApp;
