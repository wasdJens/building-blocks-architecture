import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  public getRecommended(): Book[] {
    return [
      {
        author: 'Jens Reiner',
        cover: 'Cover.png',
        description: 'A great book',
        title: 'How to be a great book',
      },
      {
        author: 'Jens Reiner',
        cover: 'Cover.png',
        description: 'A great book',
        title: 'How to fake data',
      },
      {
        author: 'Jens Reiner',
        cover: 'Cover.png',
        description: 'A great book',
        title: 'How to run out of ideas',
      },
    ];
  }

  public getLatest(): Book[] {
    return [
      {
        author: 'Jens Reiner',
        cover: 'Cover.png',
        description: 'Bachelor Thesis',
        title: 'Chatbots im Industriellen Umfeld',
      },
      {
        author: 'Jens Reiner',
        cover: 'Cover.png',
        description: 'Dont touch paint',
        title: 'How to clean a car',
      },
    ];
  }

  public getAll(): Book[] {
    return [...this.getRecommended(), ...this.getLatest()];
  }

  public mapBooksToCards(books: Book[]): Card[] {
    return books.map((book) => {
      return {
        title: book.title,
        description: book.description,
        picture: book.cover,
        subtitle: book.author,
      };
    });
  }
}
