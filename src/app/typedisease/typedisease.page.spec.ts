import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypediseasePage } from './typedisease.page';

describe('TypediseasePage', () => {
  let component: TypediseasePage;
  let fixture: ComponentFixture<TypediseasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypediseasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypediseasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
