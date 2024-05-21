import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { Kitten } from './models/kitten';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ListKittenComponent,CreateKittenComponent, UserKittenComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title ='kitten-story';
}
