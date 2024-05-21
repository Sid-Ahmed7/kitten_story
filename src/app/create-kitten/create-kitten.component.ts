import { CommonModule, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kitten } from '../models/kitten';
import { KittenService } from '../services/kitten.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [CommonModule, FormsModule,NgStyle],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {

  kitten: Kitten = {
    name: '',
    race: '',
    dateOfBirth: new Date(),
    pathImg: '',
  }

  constructor(private router: Router) { }

  service = inject(KittenService);

  createKitten(): void {

    const newKitten: Kitten = {
      name: this.kitten.name,
      race: this.kitten.race,
      dateOfBirth: this.kitten.dateOfBirth,
      pathImg: this.kitten.pathImg
    }
  
    this.service.createKitten(newKitten);
    this.router.navigate(['/list-kitten']);
  }
}
