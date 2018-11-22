import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsCardComponent } from './signups-card.component';

describe('SignupsCardComponent', () => {
  let component: SignupsCardComponent;
  let fixture: ComponentFixture<SignupsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
