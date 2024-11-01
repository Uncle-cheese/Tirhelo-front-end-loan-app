import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { LoansService } from '../../services/loans.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstants } from '../../shared/global-constants';
import { Loan, Loans } from '../../model/loan';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { Tabs } from '../../tabs';

@Component({
  selector: 'app-active-trades',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './active-trades.component.html',
  styleUrl: './active-trades.component.scss'
})
export class ActiveTradesComponent implements OnInit{

  dataSources!:Loan[];
  resMessage:any;
  dtoptions:Config = {}
  dttrigger:Subject<any>= new Subject<any>();

  loans:Array<Loans> = [
    {refNo: 'Nhla00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Luck00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Sihl00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Nhla00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Zihn00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Zeer00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Kols00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
  ]


  currentPage: number = 1;
  pageSize: number = 10;
  filteredLoans: Array<Loans> = this.loans;

  constructor(private loanService: LoansService,
    private ngxService: NgxUiLoaderService,
    private snackBarService: SnackbarService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.ngxService.start();
    //  this.getLoans(); 
    this.visibleData();
    this.pageNumbers();
  }

  getLoans() {
    this.loanService.getLoans().subscribe((res) => {
      this.ngxService.stop();
      this.dataSources = res;
      // this.dttrigger.next(null);
    }, (error:any) =>{
      this.ngxService.stop();
      console.log(error.error?.message)
      if (error.error?.message) {
        this.resMessage = error.error?.message
      } else {
        this.resMessage = GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.resMessage, GlobalConstants.error);
    })
  }

  visibleData() {
      this.ngxService.stop();

    let startIndex = (this.currentPage -1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredLoans.slice(startIndex , endIndex);
  }

  nextPage () {
    this.ngxService.start()
    this.currentPage++;
    this.visibleData();
  }

  previousPage() {
    this.ngxService.start();
    this.currentPage--;
    this.visibleData();
  }

  pageNumbers() {
    let totalPages = Math.ceil(this.loans.length / this.pageSize) ;
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changePage(pageNumber:number) {
    this.currentPage = pageNumber;
    this.visibleData();
  }

  
  filterData(searchTerm: string) {
    this.filteredLoans = this.loans.filter((item) => {
      return Object.values(item).some((val) => {
        val.toLowerCase().includes(searchTerm.toLowerCase())
      })
    });
    this.visibleData();
  }
}
