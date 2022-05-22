import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ChuckJokesComponent } from './chuck-jokes.component';

describe( 'ChuckJokesComponent', () => {
    let component: ChuckJokesComponent;
    let fixture: ComponentFixture<ChuckJokesComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            imports: [ HttpClientTestingModule ],
            declarations: [ ChuckJokesComponent ]
        } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture = TestBed.createComponent( ChuckJokesComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
