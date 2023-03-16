import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcDataComponent } from './qc-data.component';

describe('QcDataComponent', () => {
  let component: QcDataComponent;
  let fixture: ComponentFixture<QcDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
