import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SearchWordsService} from '../search-words/search-words.service';
import 'rxjs/add/operator/debounceTime';

const DEBOUNCE_TIME = 500;

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() onData: EventEmitter<any> = new EventEmitter();
  @Input() set word(word: string) {
    this.searchForm.controls['word'].setValue(word);
  }
  isNotFound: boolean;
  searchForm = new FormGroup({
    word: new FormControl('', [])
  });
  constructor(private searchWordsService: SearchWordsService) { }

  ngOnInit() {
    this.searchForm.controls['word'].valueChanges
      .debounceTime(DEBOUNCE_TIME)
      .subscribe(this.search.bind(this));
  }

  search(value: string): void {
    this.isNotFound = false;
    if (!value) {
      return;
    }
    this.searchWordsService.searchWord(value).subscribe(response => {
      const parcedData = response.json();
      this.onData.emit(parcedData);
    }, err => {
      this.isNotFound = true;
      this.onData.emit(null);
    });
  }
}
