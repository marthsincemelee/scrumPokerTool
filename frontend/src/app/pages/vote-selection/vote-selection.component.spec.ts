import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSelectionComponent } from './vote-selection.component';

describe('VoteSelectionComponent', () => {
  let component: VoteSelectionComponent;
  let fixture: ComponentFixture<VoteSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
