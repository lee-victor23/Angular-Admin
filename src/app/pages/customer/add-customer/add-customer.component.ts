import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from '../../../services/get-cutomers.service';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Component({
  selector: 'ngx-add-customers',
  styleUrls: ['./add-customer.component.scss'],
  templateUrl: './add-customer.component.html',
})

export class AddCustomerComponent {
  customerForm = new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      zipCode: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
    }),
    phone_number: new FormControl(''),
    email_address: new FormControl(''),
  });

  constructor(private http: HttpClient, private toastrService: NbToastrService, private customer:CustomersService) {}

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }

  onSubmit() {
    const formData = this.customerForm.value;
    
    this.customer.addCustomer(formData).subscribe({
      next: (response) => {
        console.log(response);
        this.showToast('success', 'Added Successfully', 'Customer was added into system.');
        //Jump back to original page 
      },
      error: (error) => {
        console.error(error),
        this.showToast('warning', 'Added Failed', 'We encounter some techinal issue.');
      },
    });
  }
}
