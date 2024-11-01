import { Component } from '@angular/core';
import { Loan, Loans } from '../../model/loan';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { LoansService } from '../../services/loans.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../shared/global-constants';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss'
})
export class LoansComponent {

  dataSources!:Loans[];
  resMessage:any;
  dtoptions:Config = {}
  dttrigger:Subject<any>= new Subject<any>();

  loans:Array<Loans> = [
    {refNo: 'Nhla00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Luck00120240815', name: 'Omhle Mpingwane', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Sihl00120240815', name: 'Zizipho Ndlovu', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Nhla00120240815', name: 'John Van Dean', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Zihn00120240815', name: 'Nsovo Chauke', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Zeer00120240815', name: 'Annastacia Swizz', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Kols00120240815', name: 'Mlando Sithole', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Khesani Malamulela', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Nhlanhla Mavundla', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Peter Moyambo', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Mpumi Sithole', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Joyce Booysin', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Jake Olatunde', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Justin Smith', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Roy Mathembula', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Jake Cee', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Docker Ndlovu', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Esihle Khuzwayo', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Patient Zamande', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Philip Qubu', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
      action: 'claim', status: 'up-to-date'
    },
    {refNo: 'Siph00120240815', name: 'Zodwa Ntseku', loanAmount: 'R 1400.00', balance: 'R 900.00', issuedDate: '2024-08-15', dueDate: '2024-09-15', entityType: 'Indiv',
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
      // this.dataSources = res;
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
    let totalPages = Math.ceil(this.filteredLoans.length / this.pageSize) ;
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changePage(pageNumber:number) {
    this.ngxService.start();
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

  searchLoan(key:string) {
    const results: Loans[] = [];
    for (const loan of this.filteredLoans) {
      if (loan.refNo.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || loan.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
      results.push(loan);
    }
    }
    this.filteredLoans = results;
    if (results.length === 0 || !key) {
      this.visibleData();
    }
  }

  // onOpenModal(mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');

  //   if (mode === 'claim') {
  //   button.setAttribute('data-target', '#claimModal');
  //   }
  //   container?.appendChild(button);
  //   button.click()
  // }

}
