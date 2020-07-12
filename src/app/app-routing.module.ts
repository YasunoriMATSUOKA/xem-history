import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { InvoiceComponent } from './page/invoice/invoice.component';
import { ReceiptComponent } from './page/receipt/receipt.component';
import { HistoryComponent } from './page/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:
      'invoice/tickers/:ticker/addresses/:address/units/:unit/amount/:amount',
    component: InvoiceComponent,
  },
  {
    path: 'receipt/:id',
    component: ReceiptComponent,
  },
  {
    path: 'history/tickers/:ticker/addresses/:address',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
