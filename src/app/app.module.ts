import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ViewHomeComponent } from './view/home/home.component';
import { InvoiceComponent } from './page/invoice/invoice.component';
import { ViewInvoiceComponent } from './view/invoice/invoice.component';
import { HistoryComponent } from './page/history/history.component';
import { ViewHistoryComponent } from './view/history/history.component';
import { ReceiptComponent } from './page/receipt/receipt.component';
import { ViewReceiptComponent } from './view/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewHomeComponent,
    InvoiceComponent,
    ViewInvoiceComponent,
    HistoryComponent,
    ViewHistoryComponent,
    ReceiptComponent,
    ViewReceiptComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
