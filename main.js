"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentManagementApp_1 = require("./StudentManagementApp");
var student_1 = require("./student");
var readlineSync = require('readline-sync');
var managementStudent = new StudentManagementApp_1.StudentManagementApp();
var repeat = true;
var nunStudent = readlineSync.question("nhap so luong sinh vien");
for (var i = 0; i < nunStudent; i++) {
    console.log("sinh vien thu ".concat(i + 1));
    var id = readlineSync.question("id: ");
    var name_1 = readlineSync.question("name: ");
    console.log(" className\n    1.l\u1EDBp A\n    2.l\u1EDBp B                \n    ");
    var className = void 0;
    var questionClassName = readlineSync.question("nhap: ");
    if (questionClassName == 1) {
        className = "class A";
    }
    else {
        className = "class B";
    }
    var homeTown = readlineSync.question("homeTown: ");
    var score = +readlineSync.question("score: ");
    var hobbies = readlineSync.question("hobbies: ");
    var studentNew = new student_1.Student(id, name_1, className, homeTown, score, hobbies);
    managementStudent.addStudent(studentNew);
}
do {
    console.log("\n            menu\n            1. displayStudents\n            2. searchStudentByName\n            3. updateStudent\n            4. deleteStudent\n            0. out\n");
    var option = +readlineSync.question("nhap (1/4): ");
    switch (option) {
        case 1: {
            console.log("===============listStudent===============");
            managementStudent.displayStudents();
            break;
        }
        case 2: {
            var findName = readlineSync.question("nhap ten can tim: ");
            console.log("=================Search for students by name=================");
            managementStudent.searchStudentByName(findName);
            break;
        }
        case 3: {
            var findId = readlineSync.question("nhap id sinh vien muon sua: ");
            var editId = readlineSync.question("id: ");
            var editName = readlineSync.question("name: ");
            console.log(" className\n    1.l\u1EDBp A\n    2.l\u1EDBp B                \n    ");
            var editClassName = void 0;
            var questionClassName = readlineSync.question("nhap: ");
            if (questionClassName == 1) {
                editClassName = "class A";
            }
            var editHomeTown = readlineSync.question("homeTown: ");
            var editScore = +readlineSync.question("score: ");
            var editHobbies = readlineSync.question("hobbies: ");
            console.log("=================Update a student's information=================");
            managementStudent.updateStudent(findId, new student_1.Student(editId, editName, editClassName, editHomeTown, editScore, editHobbies));
            break;
        }
        case 4: {
            var findId = readlineSync.question("nhap id sinh vien muon xoa: ");
            console.log("=================Delete a student=================");
            managementStudent.deleteStudent(findId);
            break;
        }
        case 0: {
            repeat = false;
        }
    }
} while (repeat);
