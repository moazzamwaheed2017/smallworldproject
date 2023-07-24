import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee, EmployeeTable, EmpFilter, filterOption } from '../../smallworld.models';
import { MatPaginator } from '@angular/material/paginator';

import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';

import { EmployeeService } from '../../smallworld.services';

import { merge, Observable, of as observableOf, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'smallworld-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MainContentComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'avatar',
  ];

  empTable!: EmployeeTable;

  totalData!: number;
  EmpData!: Employee[];

  dataSource = new MatTableDataSource<Employee>();

  isLoading = false;

  constructor(public empService: EmployeeService) {}

  @ViewChild('paginator') paginator!: MatPaginator;

  pageSizes = [3, 5, 7];

  getTableData$(pageNumber: Number, pageSize: Number) {
    return this.empService.getEmployees(pageNumber, pageSize);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          return this.getTableData$(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((empData) => {
          if (empData == null) return [];
          this.totalData = empData.total;
          this.isLoading = false;
          return empData.data;
        })
      )
      .subscribe((empData) => {
        this.EmpData = empData;
        this.dataSource = new MatTableDataSource(this.EmpData);
      });
  }

  ngOnInit(): void {}
}
