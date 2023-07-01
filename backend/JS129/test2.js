let act = function() {
  console.log("is acting");
}

let myName = "Nhan";

let person = {
  myName: myName,
  act: act
}

//

function makePerson(myName) {
  return {
    myName,
    act: function() {
      console.log("is acting");
    }
  }
}

const nhan = makePerson("Nhan");

// console.log(nhan.myName)
// nhan.act();

// console.log(nhan.hasOwnProperty("act"))

//pseudo classical inheritance -  sub type inherit from a supertype 
// pseudo classical or a class pattern


// prototype inheritance - object inheriting other objects

// OOLO

//student
//figure out the common methods that all instance shares 

// study...
const StudentPrototype = {
  study() {
    console.log("is studying");
  },
  init(name) {
    this.name = name;
    return this;
  }
}

let student = Object.create(StudentPrototype).init("Nhan");
console.log("OOLO:", student);

// student.study();

//
function Student(name) {
  this.name = name;
}

Student.prototype.study = function() {
  console.log("is studying");
};

let student2 = new Student("kwang");
console.log("Clasical:", student2);
// student2.study();

/*
looking for a property
student2 (object)
-> Student.prototype (object)
--> Student.prototype.prototype
    which is the same as
    Object.prototype
    null
*/

// GradStudent to inherit from Student
function GradStudent(myName) {
  Student.call(this, myName);
}
GradStudent.prototype = Object.create(Student.prototype);
GradStudent.prototype.constructor = GradStudent;

let gradStudent = new GradStudent();

console.log(gradStudent.constructor);

/*

student2 (object) -> Student.prototype (object)
 
gradStudent -> GradStudent.prototype -> Student.prototype


*/



