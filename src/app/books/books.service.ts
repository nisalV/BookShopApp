import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: "Clean Code 01",
        author: "Robert ",
        image: "https://m.media-amazon.com/images/P/0735219109.01._SCLZZZZZZZ_SX500_.jpg",
        amount: 1000,
      },
      {
        name: "Clean Code 02",
        author: "Robert ",
        image: "https://m.media-amazon.com/images/P/0735219109.01._SCLZZZZZZZ_SX500_.jpg",
        amount: 2000,
      },
      {
        name: "Clean Code 03",
        author: "Robert ",
        image: "https://m.media-amazon.com/images/P/0735219109.01._SCLZZZZZZZ_SX500_.jpg",
        amount: 1500,
      },
      {
        name: "Clean Code 04",
        author: "Robert ",
        image: "https://m.media-amazon.com/images/P/0735219109.01._SCLZZZZZZZ_SX500_.jpg",
        amount: 1100,
      }
    ];
  }
}
