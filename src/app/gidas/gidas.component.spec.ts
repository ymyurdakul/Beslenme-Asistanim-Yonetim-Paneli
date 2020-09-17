import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GidasComponent } from './gidas.component';

describe('GidasComponent', () => {
  let component: GidasComponent;
  let fixture: ComponentFixture<GidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
