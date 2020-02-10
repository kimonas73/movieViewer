import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataProviderService } from '../api/data-provider.service';
import { startWith, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredMovies = [];
  
  constructor(public dataProvider: DataProviderService) { 
    this.stateCtrl.valueChanges
    .pipe(debounceTime(500))
    .subscribe(state => {
      console.log(state);
      if (state && state.length > 0)
        this.dataProvider.search(state).subscribe(res => this.filteredMovies = res);
    });

  }

  ngOnInit() {
    
  }


}
