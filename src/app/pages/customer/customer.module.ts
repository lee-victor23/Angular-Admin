import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { CustomersRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule as ngFormsModule , ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    CustomersRoutingModule,
    NbSelectModule,
    NbIconModule,
    Ng2SmartTableModule,
    ngFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    CustomerListComponent
  ],
})
export class CustomerModule { }
