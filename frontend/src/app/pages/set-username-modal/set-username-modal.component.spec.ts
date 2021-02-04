import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUsernameModalComponent } from './set-username-modal.component';

describe('SetUsernameModalComponent', () => {
  let component: SetUsernameModalComponent;
  let fixture: ComponentFixture<SetUsernameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUsernameModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUsernameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
