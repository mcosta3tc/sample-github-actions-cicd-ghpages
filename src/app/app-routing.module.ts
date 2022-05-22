import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChuckJokesComponent } from './chuck-jokes/chuck-jokes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'chuck', component: ChuckJokesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
