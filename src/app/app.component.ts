import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { News } from './news';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Datos dummy
  title = 'Hacker News';
  module = 'Feed';

  ELEMENT_DATA: News[] = [];

  // 
  displayedColumns: string[] = ['title', 'author', 'created', 'icon'];
  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService) {
    this.api.getNews().subscribe((data) => {
      console.log(data.body);
      this.ELEMENT_DATA = data.body;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() { }

  removeNews(id: string) {
    console.log("Noticia ID a eliminar: " + id);
    this.api.removeNews(id).subscribe((data) => {
      this.ELEMENT_DATA = data.body;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }
}
