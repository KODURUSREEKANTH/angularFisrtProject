import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedUserComponent } from './view-selected-user.component';

describe('ViewSelectedUserComponent', () => {
  let component: ViewSelectedUserComponent;
  let fixture: ComponentFixture<ViewSelectedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
