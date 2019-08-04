import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info1Page } from './info1.page';

describe('Info1Page', () => {
  let component: Info1Page;
  let fixture: ComponentFixture<Info1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
