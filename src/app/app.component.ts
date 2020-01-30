import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Datos dummy
  title = 'Hacker News';
  module = 'Feed';

  // 
  displayedColumns: string[] = ['title', 'author', 'created', 'icon'];
  dataSource = new MatTableDataSource<Feed>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Feed {
  title: string;
  author: string;
  created: string;
  icon: string;
}

const ELEMENT_DATA: Feed[] = [
  { title: 'Title 1', author: 'Juan', created: 'xx Moments ago', icon: 'delete_forever' },
  { title: 'Title 2', author: 'Juan', created: 'xx Moments ago', icon: 'delete_forever' },
  { title: 'Title 3', author: 'Juan', created: 'xx Moments ago', icon: 'delete_forever' }
];