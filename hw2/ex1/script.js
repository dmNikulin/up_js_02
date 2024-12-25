class Books {
    books = [];
    constructor(books) {
        this.books = books;
    }
    get allBooks() {
        return this.books;
    }

    add(someBook) {
        let flag = false;

        for (let i = 0; i < this.books.length; i++) {
            if (someBook.toLowerCase() === this.books[i].toLowerCase()) {
                flag = true;
                throw new Error('Такая книга уже есть в списке!');
            }
        }

        if (flag === false) {
            this.books.push(someBook);
        }
    }

    remove(someBook) {
        let flag = false;

        for (let i = 0; i < this.books.length; i++) {
            if (someBook.toLowerCase() === this.books[i].toLowerCase()) {
                flag = true;
                delete this.books[i];
            }
        }

        if (flag === false) {
            throw new Error('Такой книги в списки нет!')
        }
    }

    has(someBook) {
        let flag = false;

        this.books.forEach(element => {
            if (someBook.toLowerCase() === element.toLowerCase()) {
                flag = true;

            }
        });

        if (flag === false) {
            return flag;
        } else return true;
    }

}

let library = new Books(['1984', 'Скотный двор', 'Портрет Дориана Грея', 'Мартин Иден', 'Война и мир']);

library.add('Пикник на обочине');
library.remove('1984')

console.log(library.allBooks);
console.log(library.has('скотный двор'));