import { Injectable } from '@angular/core';
import { Kitten } from '../models/kitten';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  allkitten: Kitten[] = [];
  userKitten: Kitten[] = [];

  constructor() { }

  createKitten(kitten: Kitten): void {
    this.allkitten.push(kitten);
  }

  moveKittenToUserList(kitten: Kitten): void {
    const index: number = this.allkitten.indexOf(kitten);
    if (index !== -1) {
      this.allkitten.splice(index, 1);
      this.userKitten.push(kitten);
    }
   }

  getAllKitten(): Kitten[] {
    return this.allkitten;
  }
  
  getUserKitten(): Kitten[] {
    return this.userKitten;
  }
}
