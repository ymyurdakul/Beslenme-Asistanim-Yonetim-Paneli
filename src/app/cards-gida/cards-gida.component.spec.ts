import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGidaComponent } from './cards-gida.component';

describe('CardsGidaComponent', () => {
  let component: CardsGidaComponent;
  let fixture: ComponentFixture<CardsGidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsGidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
