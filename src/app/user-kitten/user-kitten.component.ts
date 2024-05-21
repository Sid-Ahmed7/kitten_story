import { Component, Input, OnInit, inject } from '@angular/core';
import { Kitten } from '../models/kitten';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css'
})
export class UserKittenComponent  {

@Input() userKitten : Kitten[] = [];
showData : boolean = false;
}
