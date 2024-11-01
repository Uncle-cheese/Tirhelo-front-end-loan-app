import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../model/loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  
  url = 'http://localhost:8080';
  
  constructor(private httpClient: HttpClient) { }

  getLoans(): Observable<Loan[]>{
    return this.httpClient.get<Loan[]>(this.url+"/product/get");
  }
}
