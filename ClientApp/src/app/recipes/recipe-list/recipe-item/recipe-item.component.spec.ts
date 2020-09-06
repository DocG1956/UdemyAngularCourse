/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RecipeItemComponent } from './recipe-item.component';

let component: RecipeItemComponent;
let fixture: ComponentFixture<RecipeItemComponent>;

describe('recipe-item component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RecipeItemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RecipeItemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});