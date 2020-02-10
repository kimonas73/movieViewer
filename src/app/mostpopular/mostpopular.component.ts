import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../api/data-provider.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mostpopular',
  templateUrl: './mostpopular.component.html',
  styleUrls: ['./mostpopular.component.scss']
})
export class MostpopularComponent implements OnInit {

  movies = [];
  isExpanded = false;

  constructor(public dataProvider: DataProviderService) { }

  ngOnInit() {
    this.dataProvider.mostPopular().subscribe(res => this.movies = res);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  
}
