import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info5Page } from './info5.page';

describe('Info5Page', () => {
  let component: Info5Page;
  let fixture: ComponentFixture<Info5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
