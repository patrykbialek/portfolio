/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoTopComponent } from './go-top.component';

describe('GoToTopComponent', () => {
  let component: GoTopComponent;
  let fixture: ComponentFixture<GoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
