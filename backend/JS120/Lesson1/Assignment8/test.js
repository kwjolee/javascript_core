let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    getDescription() {
      let readStatus = this.read ? "have" : "haven't";
      return `${this.title} was written by ${this.author}. I ${readStatus} read it.`;
    },
    readBook() {
      this.read = true;
    }
  };
}

console.log(book1.getDescription());
book1.readBook();
console.log(book1.getDescription());

