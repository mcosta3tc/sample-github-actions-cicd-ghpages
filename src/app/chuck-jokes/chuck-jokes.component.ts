import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChuckJokeResponse } from './ChuckJokeResponse';

@Component( {
    selector: 'app-chuck-jokes',
    templateUrl: './chuck-jokes.component.html',
    styleUrls: [ './chuck-jokes.component.scss' ]
} )
export class ChuckJokesComponent implements OnInit {
    jokeImg: String = '';
    jokeText: String = '';
    private jokeUrl = 'https://api.chucknorris.io/jokes/random';

    constructor( private http: HttpClient ) { }

    ngOnInit(): void {
        this.http.get<ChuckJokeResponse>( this.jokeUrl ).subscribe( jokeResponse => {
            this.jokeImg = jokeResponse.icon_url;
            this.jokeText = jokeResponse.value;
        } )
    }

}
