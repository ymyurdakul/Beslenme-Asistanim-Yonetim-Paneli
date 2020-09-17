import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicitabloComponent } from './kullanicitablo.component';

describe('KullanicitabloComponent', () => {
  let component: KullanicitabloComponent;
  let fixture: ComponentFixture<KullanicitabloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanicitabloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullanicitabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
