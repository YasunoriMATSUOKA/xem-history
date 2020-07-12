import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Invoice } from '../../domain/invoice/invoice.model';
import { mockInvoice } from '../../domain/invoice/mockInvoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  invoice: Invoice;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.invoice = mockInvoice;
  }

  onCreateInvoice(invoice: Invoice): void {
    this.invoice = invoice;
    this.router.navigate([
      '/invoice/tickers',
      this.invoice.ticker,
      'addresses',
      this.invoice.address,
      'units',
      this.invoice.invoiceUnit,
      'amount',
      this.invoice.invoiceAmount,
    ]);
  }
}
