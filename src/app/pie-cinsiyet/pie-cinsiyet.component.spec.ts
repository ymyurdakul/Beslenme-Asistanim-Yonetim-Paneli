import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieCinsiyetComponent } from './pie-cinsiyet.component';

describe('PieCinsiyetComponent', () => {
  let component: PieCinsiyetComponent;
  let fixture: ComponentFixture<PieCinsiyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieCinsiyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieCinsiyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
