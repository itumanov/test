import {Component} from '@angular/core';


@Component({
  selector: 'app-search-words',
  templateUrl: './search-words.component.html',
  styleUrls: ['./search-words.component.css']
})
export class SearchWordsComponent {
  synonyms: string[];
  definitions: any[];
  word: string;

  constructor() { }

  setData(data?: any): void {
    if (data) {
      this.synonyms = data.synonyms;
      this.definitions = data.definitions;
    } else {
      this.synonyms = [];
      this.definitions = [];
    }
  }

  selectWord(e): void {
    e.preventDefault();
    e.stopPropagation();
    this.setData(null);
    this.word = e.target.innerText;
  }
}
