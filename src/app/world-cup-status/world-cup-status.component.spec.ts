import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCupStatusComponent } from './world-cup-status.component';

describe('WorldCupStatusComponent', () => {
  let component: WorldCupStatusComponent;
  let fixture: ComponentFixture<WorldCupStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCupStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
