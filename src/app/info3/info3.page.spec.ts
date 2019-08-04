import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info3Page } from './info3.page';

describe('Info3Page', () => {
  let component: Info3Page;
  let fixture: ComponentFixture<Info3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
