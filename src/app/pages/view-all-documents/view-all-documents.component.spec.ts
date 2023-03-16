import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDocumentsComponent } from './view-all-documents.component';

describe('ViewAllDocumentsComponent', () => {
  let component: ViewAllDocumentsComponent;
  let fixture: ComponentFixture<ViewAllDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
