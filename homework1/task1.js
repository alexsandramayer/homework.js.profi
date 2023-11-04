"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/


const albums = [
    { title: 'First Album', artist: 'George', year: 2021 }, 
    { title: 'Second Album', artist: 'Mark', year: 2022 }, 
    { title: 'Third Album', artist: 'Alex', year: 2023 }, 
]

const musicCollection = {
    albums,
    [Symbol.iterator]() { 
        let i = 0;
        const array = this.albums;
        return  {
            next() {
                return i < array.length ? {done: false, value: array[i++]} : {done: true};
            }
        }
    }

    // *[Symbol.iterator]() { 
    //     for (const album of this.albums) {
    //         yield album; 
    //     }
    // }
}
for (const album  of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}