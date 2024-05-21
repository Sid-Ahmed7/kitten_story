import { Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: ListKittenComponent, pathMatch: 'full'},
    {path: 'list-kitten', component:ListKittenComponent},
    {path: 'create-kitten', component: CreateKittenComponent},
    {path: '**', component: PageNotFoundComponent}
];
