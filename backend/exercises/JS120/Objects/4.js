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

let foo = createStudent('Foo', '1st');

console.log(foo.info());
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();