/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ShoppinglistEditComponent } from './shoppinglist-edit.component';

let component: ShoppinglistEditComponent;
let fixture: ComponentFixture<ShoppinglistEditComponent>;

describe('shoppinglist-edit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShoppinglistEditComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ShoppinglistEditComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});