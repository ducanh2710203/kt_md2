import {StudentManagementApp} from "./StudentManagementApp";
import {Student} from "./student";

let readlineSync = require('readline-sync')
let managementStudent = new StudentManagementApp();
let repeat = true
let nunStudent = readlineSync.question("nhap so luong sinh vien")
for (let i = 0; i < nunStudent; i++) {
    console.log(`sinh vien thu ${i + 1}`)
    let id = readlineSync.question("id: ")
    let name = readlineSync.question("name: ")

    console.log(` className
    1.lớp A
    2.lớp B                
    `)
    let className
    let questionClassName = readlineSync.question("nhap: ")
    if (questionClassName==1){
         className = "class A"
    }else {
        className = "class B"
    }

    let homeTown = readlineSync.question("homeTown: ")
    let score = +readlineSync.question("score: ")
    let hobbies = readlineSync.question("hobbies: ")
    let studentNew = new Student(id, name, className, homeTown, score, hobbies);
    managementStudent.addStudent(studentNew);
}
do {
    console.log(`
            menu
            1. displayStudents
            2. searchStudentByName
            3. updateStudent
            4. deleteStudent
            0. out
`)
    let option = +readlineSync.question("nhap (1/4): ")
    switch (option) {
        case 1: {
            console.log("===============listStudent===============")
            managementStudent.displayStudents();
            break
        }
        case 2: {
            let findName = readlineSync.question("nhap ten can tim: ")
            console.log("=================Search for students by name=================")
            managementStudent.searchStudentByName(findName);
            break
        }
        case 3: {
            let findId = readlineSync.question("nhap id sinh vien muon sua: ")
            let editId = readlineSync.question("id: ")
            let editName = readlineSync.question("name: ")
            console.log(` className
    1.lớp A
    2.lớp B                
    `)
            let editClassName
            let questionClassName = readlineSync.question("nhap: ")
            if (questionClassName==1){
                editClassName = "class A"
            }            let editHomeTown = readlineSync.question("homeTown: ")
            let editScore = +readlineSync.question("score: ")
            let editHobbies = readlineSync.question("hobbies: ")
            console.log("=================Update a student's information=================")
            managementStudent.updateStudent(findId, new Student(editId, editName, editClassName, editHomeTown, editScore, editHobbies));
            break
        }
        case 4: {
            let findId = readlineSync.question("nhap id sinh vien muon xoa: ")
            console.log("=================Delete a student=================")
            managementStudent.deleteStudent(findId);
            break
        }
        case 0: {
            repeat = false

        }
    }
} while (repeat)

