import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnasactionStatusComponent } from './trnasaction-status.component';

describe('TrnasactionStatusComponent', () => {
  let component: TrnasactionStatusComponent;
  let fixture: ComponentFixture<TrnasactionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrnasactionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrnasactionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
