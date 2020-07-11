import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoiceComponent } from './invoice.component';

describe('ViewInvoiceComponent', () => {
  let component: ViewInvoiceComponent;
  let fixture: ComponentFixture<ViewInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInvoiceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
