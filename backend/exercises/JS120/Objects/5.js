// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      return `${this.name} is a ${this.year} year student`;
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      let course = this.courses.filter(course => {
        return course.code === code;
      })[0];
      if (course.hasOwnProperty("notes")) {
        course.notes.push(note);
      } else {
        course.notes = [note];
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty("notes")) {
          let courseName = course.name;
          console.log(`${courseName}: ${course.notes.join('; ')}`);
        }
      });
    },

    updateNote(code, note) {
      let course = this.courses.filter(course => {
        return course.code === code;
      })[0];
      course.notes = [note];
    }
  };
}

let school = {
  students: [],
  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log("Invalid Year");
    } else {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];
    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name} : ${course.grade}`);
      } else {
        console.log(`${course.name} : In progress`);
      }
    });
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  }
};

school.addStudent('foo', '3rd');
console.log(school.students);