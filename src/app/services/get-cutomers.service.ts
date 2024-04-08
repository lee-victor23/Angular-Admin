import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // READ: Get a list of customers
  getCustomers(skip = 0, take = 5): Observable<any> {
    const endpoint = `${this.apiUrl}query?modelName=Customer&skip=${skip}&take=${take}`;
    return this.http.get(endpoint).pipe(catchError(this.handleError));
  }

  // READALL: Get all customers
  getAllCustomers(): Observable<any> {
    const endpoint = `${this.apiUrl}/customers`;
    return this.http.get(endpoint).pipe(catchError(this.handleError));
  }

  // CREATE: Add a new customer
  addCustomer(customerData: any): Observable<any> {
    const endpoint = `${this.apiUrl}/customers`;
    return this.http.post(endpoint, customerData).pipe(catchError(this.handleError));
  }

  // READ: Get a single customer by id
  getCustomerById(id: number): Observable<any> {
    const endpoint = `${this.apiUrl}/customers/${id}`;
    return this.http.get(endpoint).pipe(catchError(this.handleError));
  }

  // UPDATE: Update a customer's information
  updateCustomer(id: number, customerData: any): Observable<any> {
    const endpoint = `${this.apiUrl}/customers/${id}`;
    return this.http.put(endpoint, customerData).pipe(catchError(this.handleError));
  }

  // DELETE: Remove a customer
  deleteCustomer(id: number): Observable<any> {
    const endpoint = `${this.apiUrl}/customers/${id}`;
    return this.http.delete(endpoint).pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred:', error.error.message);
    return throwError(error);
  }
}