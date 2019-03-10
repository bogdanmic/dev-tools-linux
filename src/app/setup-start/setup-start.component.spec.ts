import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupStartComponent } from './setup-start.component';

describe('SetupStartComponent', () => {
  let component: SetupStartComponent;
  let fixture: ComponentFixture<SetupStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
