import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info2Page } from './info2.page';

describe('Info2Page', () => {
  let component: Info2Page;
  let fixture: ComponentFixture<Info2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
