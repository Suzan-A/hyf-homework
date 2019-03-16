const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 6 || studentName === "Queen")
        {class07Students.push (studentName);}
    else if (studentname= "")
        {console.log("Student name should be filled");}
    else if (class07Students.includes(studentName))
        {console.log(studentName + "is already in this class")}
    else 
        {"Cannot add more students to class 07"}
}
addStudentToClass("Maria");
addStudentToClass("Zahra");
addStudentToClass("Peter");
addStudentToClass("John");
addStudentToClass("Kristina");
addStudentToClass("Lars")
addStudentToClass("Mads");
addStudentToClass("Queen");
addStudentToClass("");
addStudentToClass("Maria");

console.log(class07Students);

function getNumberOfStudents() {
    return class07Students.length;
}
console.log(getNumberOfStudents());