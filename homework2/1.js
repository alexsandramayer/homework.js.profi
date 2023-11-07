"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/


class Library {
    #books;

    get allBooks() {
        return this.#books;
    }

    constructor(arrayBooks) {
        if (Library.findRepeats(arrayBooks)) {
            throw new Error('Обнаружены дубликаты книг');
        }
        this.#books = arrayBooks;
    }

    

    static findRepeats(arrayBooks) {
        const setBooks = new Set(arrayBooks);
        return setBooks.size !== arrayBooks.length;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error('Книга с таким названием уже добавлена!')
        }
        this.#books.push(title);
    }

    removeBook(title){
        const index = this.#books.findIndex((el) => el === title);
        if (index === -1) {
            throw new Error('Книги с таким названием не существует!')
        }
        this.#books.splice(index, 1);
    }

    hasBook(title){
        return this.#books.includes(title);
    }

}

const dublicateBooks = [
    'Институт',
    'Талисман', 
    'Черный дом', 
    'Оно', 
    'Институт', 
    'Блейз',
];

const withoutDublicateBooks = [
    'Институт',
    'Талисман', 
    'Черный дом', 
    'Оно',  
    'Блейз',
];

const library1 = new Library(dublicateBooks);
console.log(library1.allBooks);

const library2 = new Library(withoutDublicateBooks);
console.log(library2.allBooks);

library2.addBook('Куджо');
library2.addBook('Оно');
console.log(library2.allBooks);

library2.removeBook('Институт');
console.log(library2.allBooks);
library2.removeBook('Институт');

console.log(library2.hasBook('Куджо'));
console.log(library2.hasBook('Институт'));
