/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ShoppingListComponent } from './shopping-list.component';

let component: ShoppingListComponent;
let fixture: ComponentFixture<ShoppingListComponent>;

describe('ShoppingList component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShoppingListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ShoppingListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});