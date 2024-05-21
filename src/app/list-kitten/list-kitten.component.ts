import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Kitten } from '../models/kitten';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [UserKittenComponent],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {

allKitten : Kitten[] = [];
userKitten : Kitten[] = [];
service = inject(KittenService);

ngOnInit(): void {
 this.allKitten =  this.service.getAllKitten();
}

addKittenUser(kitten : Kitten) {
this.service. moveKittenToUserList(kitten);
this.userKitten = this.service.getUserKitten();
}

// addKittenToPersonalList( kitten : Kitten) : void {
//   this.addKittenToUserList.emit(kitten);
// }
}
