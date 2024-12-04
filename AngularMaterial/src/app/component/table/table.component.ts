import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Customer } from '../../Model/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit {

  customerList !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["id", "name", "email", "phone", "status", "action"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  term$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchString = '';
  constructor(private service: MasterService, private dialog: MatDialog) {

  }

  ngAfterViewInit(): void {
    this.getCustomerDataBasedonInput();    
  }

  getCustomerDataBasedonInput() {
    this.term$.subscribe(() => (this.paginator.pageIndex = 0));
    merge(
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page
    ).pipe(
      startWith({}),
      switchMap((searchTerm) => {
        console.log('Within Switchmap searhTerm is-', searchTerm);

        typeof searchTerm == 'string'
          ? (this.searchString = searchTerm.toString()) : '';
        if (this.searchString == '') {
          return this.service.GetCustomer().pipe(
            catchError(() => of(null))
          );
        }
        else {
          return this.service.GetCustomerWithSearch(this.searchString).pipe(
            catchError(() => of(null))
          );
        }

      }),
      map((data) => {
        console.log('Within map -', data);
        if (data === null) {
          return [];
        }
        return data;
      })
    ).subscribe((data) => {
      console.log('Within subscribe -', data);
      this.customerList = data;
      this.setTableDataSource();
    })

  }

  getCustomerData(){
    this.service.GetCustomer().subscribe(res => {
      this.customerList = res;
      this.setTableDataSource();
    })    
  }

  setTableDataSource(){
    this.dataSource = new MatTableDataSource<Customer>(this.customerList);
      this.dataSource.paginator = this.paginator;
      this.sort?.sort({
        id: 'id',
        start: 'desc',
        disableClear: false
      });
      console.log('descee');
      this.dataSource.sort = this.sort;
  }

  FilterChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  OpenAddUserPopup() {    
    var data = {
      id: 0,
      title: 'Add User'
    }
    this.OpenPopup(PopupComponent, data);
  }

  OpenEditPopup(userId: number) {
    var editCustomer = this.customerList.find(x => x.id == userId);    
    var data = {
        id: editCustomer?.id,
        title: 'User Edit',
        customer: editCustomer,
        isDelete: false
      }
    this.OpenPopup(PopupComponent, data);
  }
 
  OpenDeletePopup(userId: number) {
    var editCustomer = this.customerList.find(x => x.id == userId);    
    var data = {
        id: editCustomer?.id,
        title: 'Delete User',
        isDelete: true        
      }
    this.OpenPopup(PopupComponent, data);
  }

  OpenDetailsPopup(userId: number)
  {
    var data = {
      id: userId,
      title: 'User Details'
    }
    this.OpenPopup(UserdetailsComponent, data);
  }

  OpenPopup(component: any, data: any){
    var _popUp = this.dialog.open(component, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: data
    });
    _popUp.afterClosed().subscribe(item => {
      console.log(item);
      this.getCustomerData();
    })
  }

     
    
}
