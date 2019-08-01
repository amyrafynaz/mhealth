import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypefoodPage } from './typefood.page';

describe('TypefoodPage', () => {
  let component: TypefoodPage;
  let fixture: ComponentFixture<TypefoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypefoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypefoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
