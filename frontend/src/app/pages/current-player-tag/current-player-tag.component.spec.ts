import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlayerTagComponent } from './current-player-tag.component';

describe('CurrentPlayerTagComponent', () => {
  let component: CurrentPlayerTagComponent;
  let fixture: ComponentFixture<CurrentPlayerTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPlayerTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPlayerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
