import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Invoice } from '../../domain/invoice/invoice.model';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class ViewHomeComponent implements OnInit {
  @Input() ticker: String;
  @Input() address: String;
  @Input() invoiceAmount: Number;
  @Input() invoiceUnit: String;

  invoice: Invoice;

  @Output() appCreateInvoice: EventEmitter<Invoice>;

  constructor() {
    this.appCreateInvoice = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.invoice = {
      ticker: this.ticker,
      address: this.address,
      invoiceAmount: this.invoiceAmount,
      invoiceUnit: this.invoiceUnit,
    };
    this.appCreateInvoice.emit(this.invoice);
  }
}
