import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info4Page } from './info4.page';

describe('Info4Page', () => {
  let component: Info4Page;
  let fixture: ComponentFixture<Info4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
