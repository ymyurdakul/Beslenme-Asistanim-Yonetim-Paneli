import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YorumsComponent } from './yorums.component';

describe('YorumsComponent', () => {
  let component: YorumsComponent;
  let fixture: ComponentFixture<YorumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YorumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YorumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
