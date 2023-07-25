import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'smallworld-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchResultComponent {

  myControl = new FormControl();
  options: string[] = [];
  data : any;
  constructor() {
  }

  public updated() {
    this.options = [];
    if (this.myControl.value.length > 0) {
      let all = ['John', 'Jenny', 'Jonson']
      let searchedWord = this.myControl.value
      for(let key in all) {
        let r = all[key].search(new RegExp(searchedWord, "i"));
        if (r != -1) {
          this.options.push(all[key])
        }
      }
    } else {
      this.options = []
    }
  }
}
