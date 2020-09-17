import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNotificationComponent } from './cards-notification.component';

describe('CardsNotificationComponent', () => {
  let component: CardsNotificationComponent;
  let fixture: ComponentFixture<CardsNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
