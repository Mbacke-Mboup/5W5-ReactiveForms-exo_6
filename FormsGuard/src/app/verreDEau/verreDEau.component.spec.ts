/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerreDEauComponent } from './verreDEau.component';

describe('VerreDEauComponent', () => {
  let component: VerreDEauComponent;
  let fixture: ComponentFixture<VerreDEauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreDEauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreDEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
